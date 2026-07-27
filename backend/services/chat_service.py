import os
import requests
from dotenv import load_dotenv

from services.rag_service import retrieve_context

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

API_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "openai/gpt-oss-20b:free"


def chat_with_document(question: str):
    """
    Answers user questions using Retrieval-Augmented Generation (RAG)
    and includes page citations.
    """

    retrieval = retrieve_context(question)

    context = retrieval["context"]
    pages = retrieval["pages"]

    if not context:
        return "Please upload a document first."

    prompt = f"""
You are an AI assistant that answers questions ONLY using the provided context.

Context:
------------------------
{context}
------------------------

Instructions:
- Answer ONLY using the provided context.
- Do NOT make up information.
- If the answer is not available in the context, reply exactly:
  "I couldn't find that information in the uploaded document."

User Question:
{question}
"""

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": prompt,
            }
        ],
    }

    response = requests.post(
        API_URL,
        headers=headers,
        json=payload,
        timeout=60,
    )

    response.raise_for_status()

    data = response.json()

    answer = data["choices"][0]["message"]["content"].strip()

    # Add page citations
    if pages:
        page_list = ", ".join(
            f"Page {page}"
            for page in pages
        )

        answer += f"\n\n📄 Source: {page_list}"

    return answer