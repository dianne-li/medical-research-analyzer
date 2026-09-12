import os

from dotenv import load_dotenv
from google import genai
from google.genai import types

from models.paper_summary import PaperSummary
from prompts.summary_prompt import SUMMARY_SYSTEM_PROMPT

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError(
        "GEMINI_API_KEY was not found. "
        "Make sure it is defined in backend/.env."
    )

client = genai.Client(api_key=api_key)


def is_biomedical_research_paper(text: str) -> bool:
    prompt = f"""
You are classifying an uploaded PDF.

Determine whether this document is a biomedical research paper.

Count as biomedical research papers:
- original biomedical or clinical research articles
- systematic reviews
- meta-analyses
- scoping reviews
- scholarly biomedical review articles

Do NOT count:
- resumes or CVs
- homework or assignments
- lecture slides
- textbooks
- essays
- news articles
- forms
- advertisements
- non-biomedical research papers
- documents that are not scholarly research articles

Respond with exactly one word:
YES
or
NO

Document text:

{text[:12000]}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
    )

    if not response.text:
        return False

    return response.text.strip().upper() == "YES"


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

    if not response.text:
        raise RuntimeError(
            "Gemini returned an empty response."
        )

    return PaperSummary.model_validate_json(
        response.text
    )