from fastapi import APIRouter, UploadFile, HTTPException

from services.pdf_service import validate_pdf, extract_text, clean_text
from services.llm_service import generate_summary
from services.citation_service import verify_quotes

router = APIRouter()


@router.post("/upload")
async def upload_pdf(file: UploadFile):
    result = await validate_pdf(file)

    if not result["success"]:
        raise HTTPException(
            status_code=400,
            detail=result["message"],
        )

    pdf_bytes = await file.read()

    text = extract_text(pdf_bytes)
    text = clean_text(text)

    summary = generate_summary(text)

    summary = verify_quotes(
        summary,
        text,
    )

    return {
        "message": "Paper analyzed successfully",
        "filename": result["filename"],
        "summary": summary,
    }