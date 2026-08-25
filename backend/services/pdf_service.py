import fitz
import io

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