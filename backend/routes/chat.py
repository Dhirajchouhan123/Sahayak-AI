from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.chat_service import chat_with_document
from utils.memory import vector_store

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Check if a document has been uploaded and indexed
        if vector_store.get("db") is None:
            raise HTTPException(
                status_code=400,
                detail="Please upload a document first."
            )

        answer = chat_with_document(request.question)

        return {
            "answer": answer
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )