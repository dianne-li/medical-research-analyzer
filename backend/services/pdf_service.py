import fitz
import io
import re

from fastapi import UploadFile


async def validate_pdf(file: UploadFile):
    if file.content_type != "application/pdf":
        return {
            "success": False,
            "message": "Only PDF files are allowed."
        }

    return {
        "success": True,
        "filename": file.filename,
        "content_type": file.content_type,
    }


def extract_text(pdf_bytes: bytes) -> str:
    document = fitz.open(
        stream=io.BytesIO(pdf_bytes),
        filetype="pdf",
    )

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text

def clean_text(text: str) -> str:
    """
    Normalize extracted PDF text before sending it to the LLM.
    """

    # Remove leading/trailing whitespace
    text = text.strip()

    # Replace multiple spaces or tabs with one space
    text = re.sub(r"[ \t]+", " ", text)

    # Replace three or more newlines with two
    text = re.sub(r"\n{3,}", "\n\n", text)

    return text