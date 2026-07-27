import os

from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

from utils.memory import vector_store

# Folder where FAISS will be stored
VECTOR_STORE_PATH = "storage/vector_store"

# Load embedding model only once
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)


def create_vector_store(pages):
    """
    Creates a FAISS vector store from page-wise PDF content.

    Each chunk stores:
        - page content
        - page number (metadata)
    """

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
    )

    texts = []
    metadatas = []

    # Split every page separately
    for page in pages:

        page_number = page["page"]
        page_text = page["text"]

        chunks = splitter.split_text(page_text)

        for chunk in chunks:
            texts.append(chunk)
            metadatas.append(
                {
                    "page": page_number
                }
            )

    db = FAISS.from_texts(
        texts=texts,
        embedding=embeddings,
        metadatas=metadatas,
    )

    # Save in memory
    vector_store["db"] = db

    # Create folder if it doesn't exist
    os.makedirs(VECTOR_STORE_PATH, exist_ok=True)

    # Save vector store to disk
    db.save_local(VECTOR_STORE_PATH)

    print(f"✅ FAISS vector store saved ({len(texts)} chunks).")

    return len(texts)


def load_vector_store():
    """
    Loads the FAISS vector store from disk if available.
    """

    faiss_file = os.path.join(VECTOR_STORE_PATH, "index.faiss")
    pkl_file = os.path.join(VECTOR_STORE_PATH, "index.pkl")

    if not (
        os.path.exists(faiss_file)
        and os.path.exists(pkl_file)
    ):
        print("📂 No saved FAISS vector store found.")
        return False

    try:
        db = FAISS.load_local(
            VECTOR_STORE_PATH,
            embeddings,
            allow_dangerous_deserialization=True,
        )

        vector_store["db"] = db

        print("✅ FAISS vector store loaded successfully.")

        return True

    except Exception as e:
        print(f"❌ Failed to load FAISS vector store: {e}")
        return False


def retrieve_context(query: str, k: int = 3):
    """
    Retrieves the most relevant chunks from the vector store.

    Returns:
    {
        "context": "...",
        "pages": [1,2]
    }
    """

    db = vector_store.get("db")

    if db is None:
        return {
            "context": "",
            "pages": []
        }

    docs = db.similarity_search(
        query=query,
        k=k,
    )

    context = "\n\n".join(
        doc.page_content
        for doc in docs
    )

    pages = sorted(
        {
            doc.metadata.get("page")
            for doc in docs
            if doc.metadata.get("page") is not None
        }
    )

    return {
        "context": context,
        "pages": pages
    }