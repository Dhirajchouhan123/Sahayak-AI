from fastapi import APIRouter, UploadFile, File, HTTPException

from services.pdf_service import extract_text_from_pdf
from services.llm_service import analyze_document
from services.rag_service import create_vector_store

router = APIRouter()


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    try:
        # Extract text page-by-page
        pages = extract_text_from_pdf(file.file)

        # Combine all pages into a single string for analysis
        full_text = "\n\n".join(
            page["text"] for page in pages
        )

        # Build FAISS vector store (with page metadata)
        chunk_count = create_vector_store(pages)

        # Generate document analysis
        analysis = analyze_document(full_text)

        return {
            "filename": file.filename,
            "pages": len(pages),
            "chunks": chunk_count,
            "analysis": analysis,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error processing document: {str(e)}"
        )