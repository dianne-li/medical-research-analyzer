from fastapi import APIRouter, UploadFile, HTTPException

from services.pdf_service import validate_pdf

router = APIRouter()


@router.post("/upload")
async def upload_pdf(file: UploadFile):
    result = await validate_pdf(file)

    if not result["success"]:
        raise HTTPException(
            status_code=400,
            detail=result["message"],
        )

    return {
        "message": "PDF received successfully",
        "filename": result["filename"],
        "content_type": result["content_type"],
    }