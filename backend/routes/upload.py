from fastapi import APIRouter, UploadFile, HTTPException

from services.pdf_service import validate_pdf, extract_text

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

    return {
        "message": "PDF received and extracted successfully",
        "filename": result["filename"],
        "content_type": result["content_type"],
        "preview": text[:500],
    }