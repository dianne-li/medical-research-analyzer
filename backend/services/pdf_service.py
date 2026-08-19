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