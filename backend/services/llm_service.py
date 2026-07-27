import os
import json
import re
import requests
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

URL = "https://openrouter.ai/api/v1/chat/completions"


def analyze_document(text: str):
    prompt = f"""
You are an expert document analysis assistant.

Analyze the following document.

Return ONLY valid JSON.

Return exactly this format:

{{
    "summary": "",
    "deadlines": [],
    "documents": [],
    "checklist": []
}}

Rules:
1. Return only valid JSON.
2. Do NOT use markdown.
3. Do NOT explain anything.
4. Do NOT wrap the JSON inside quotes.

Document:

{text}
"""

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": "openai/gpt-oss-20b:free",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    response = requests.post(
        URL,
        headers=headers,
        json=payload,
        timeout=60
    )

    response.raise_for_status()

    result = response.json()

    ai_response = result["choices"][0]["message"]["content"].strip()

    print("\n========== RAW AI RESPONSE ==========")
    print(ai_response)
    print("=====================================\n")

    # Remove markdown
    ai_response = ai_response.replace("```json", "")
    ai_response = ai_response.replace("```", "")
    ai_response = ai_response.strip()

    # Keep only JSON block
    start = ai_response.find("{")
    end = ai_response.rfind("}")

    if start != -1 and end != -1:
        ai_response = ai_response[start:end + 1]

    # Remove invalid OpenRouter annotations
    ai_response = re.sub(
        r'^\s*preliminary/speculative:.*$',
        '',
        ai_response,
        flags=re.MULTILINE
    )

    # Remove non-printable characters
    ai_response = re.sub(
        r'[^\x09\x0A\x0D\x20-\x7E]',
        '',
        ai_response
    )

    try:
        parsed = json.loads(ai_response)

        if isinstance(parsed, str):
            parsed = json.loads(parsed)

        return {
            "summary": parsed.get("summary", ""),
            "deadlines": parsed.get("deadlines", []),
            "documents": parsed.get("documents", []),
            "checklist": parsed.get("checklist", []),
        }

    except Exception as e:
        print("JSON Parsing Error:", e)

        # Extract summary as fallback
        summary_match = re.search(
            r'"summary"\s*:\s*"([^"]*)"',
            ai_response,
            re.DOTALL
        )

        summary = (
            summary_match.group(1)
            if summary_match
            else "Unable to generate summary."
        )

        return {
            "summary": summary,
            "deadlines": [],
            "documents": [],
            "checklist": [],
        }