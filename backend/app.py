from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.upload import router as upload_router
from routes.chat import router as chat_router
from services.rag_service import load_vector_store


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("\n==============================")
    print("🚀 Starting Sahayak AI Backend")
    print("==============================")

    if load_vector_store():
        print("✅ Existing FAISS vector store loaded successfully.")
    else:
        print("📂 No existing vector store found.")
        print("📄 Upload a PDF to create one.")

    yield

    print("\n🛑 Shutting down Sahayak AI Backend")


app = FastAPI(
    title="Sahayak AI API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
   allow_origins=[
    "http://localhost:5173",
    "https://sahayak-ai-sage.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routes
app.include_router(upload_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to Sahayak AI Backend 🚀"
    }