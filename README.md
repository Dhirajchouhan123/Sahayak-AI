# 🧠 Sahayak AI – Smart Document Copilot

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-009688?style=for-the-badge&logo=fastapi)
![LangChain](https://img.shields.io/badge/LangChain-RAG-green?style=for-the-badge)
![FAISS](https://img.shields.io/badge/FAISS-Vector%20Database-blue?style=for-the-badge)
![OpenRouter](https://img.shields.io/badge/OpenRouter-LLM-purple?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</p>

> AI-powered Smart Document Copilot built with **React, FastAPI, LangChain, FAISS, Sentence Transformers, and OpenRouter**.

Transform complex government notices, scholarship circulars, official documents, and PDFs into concise summaries, deadlines, required documents, checklists, and interactive AI conversations using Retrieval-Augmented Generation (RAG).
---

# 📖 Project Overview

Sahayak AI is an AI-powered Smart Document Copilot that helps users understand lengthy government notices, scholarship PDFs, official circulars, and institutional documents within seconds.

Instead of manually reading dozens of pages, users can upload a PDF and instantly receive:

- AI-generated summaries
- Important deadlines
- Required documents
- Submission checklist
- Interactive document chat powered by RAG

The application combines Large Language Models (LLMs), semantic search using FAISS, Sentence Transformers embeddings, and Retrieval-Augmented Generation (RAG) to answer user questions based only on the uploaded document.

Designed with a modern React frontend and a FastAPI backend, Sahayak AI demonstrates a production-oriented AI application architecture suitable for real-world document intelligence systems


.
# ✨ Features

- 📄 Upload PDF documents
- 🤖 AI-powered document summarization
- 📅 Automatic deadline extraction
- 📋 Required documents identification
- ✅ Smart checklist generation
- 💬 Chat with uploaded documents using RAG
- 🔍 Semantic search powered by FAISS
- 🧠 Sentence Transformer embeddings
- ⚡ FastAPI REST backend
- 🎨 Modern React + TypeScript frontend
- 📱 Responsive UI
- 🔒 Environment variable support

---

# 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- shadcn/ui

### Backend

- FastAPI
- Python
- OpenRouter API
- LangChain
- Sentence Transformers
- FAISS
- PyPDF
- Uvicorn

### AI Technologies

- Retrieval-Augmented Generation (RAG)
- Vector Embeddings
- Semantic Search
- Large Language Models (LLMs)

---

# 🏗️ Project Architecture

```
                ┌─────────────────────────┐
                │     React Frontend      │
                │ (TypeScript + Vite UI)  │
                └────────────┬────────────┘
                             │
                       REST API (Axios)
                             │
                ┌────────────▼────────────┐
                │      FastAPI Backend     │
                └───────┬─────────┬────────┘
                        │         │
                Upload Route   Chat Route
                        │         │
                        ▼         ▼
                 PDF Processing  RAG Pipeline
                        │
                 PyPDF Text Extraction
                        │
                 Sentence Transformers
                        │
                  FAISS Vector Store
                        │
                    OpenRouter LLM
                        │
                 AI Generated Response
```
---

# ⚙️ Workflow

1. User uploads a PDF document.
2. FastAPI extracts text using PyPDF.
3. Text is divided into semantic chunks.
4. Sentence Transformers generate embeddings.
5. Embeddings are stored in FAISS.
6. OpenRouter LLM analyzes the complete document.
7. AI generates:
   - Summary
   - Deadlines
   - Required Documents
   - Checklist
8. During chat, relevant chunks are retrieved using semantic search.
9. Retrieved context is sent to the LLM.
10. The LLM answers only from the uploaded document.

---

# 📂 Project Structure

```text
Sahayak-AI/
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── layout/
│   │   │   ├── ui/
│   │   │   └── workspace/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── main.tsx
│   └── package.json
│
├── docs/
├── screenshots/
├── README.md
└── LICENSE
```
---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Dhirajchouhan123/Sahayak-AI.git
cd Sahayak-AI
```

## Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```
---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENROUTER_API_KEY=your_openrouter_api_key
```

You can obtain your API key from:

https://openrouter.ai/
