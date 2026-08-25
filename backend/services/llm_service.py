import os

from dotenv import load_dotenv
from google import genai
from google.genai import types

from models.paper_summary import PaperSummary
from prompts.summary_prompt import SUMMARY_SYSTEM_PROMPT

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_summary(text: str) -> PaperSummary:
    prompt = f"""
{SUMMARY_SYSTEM_PROMPT}

Research Paper:

{text}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            response_schema=PaperSummary,
        ),
    )

    return PaperSummary.model_validate_json(response.text)