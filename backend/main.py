from fastapi import FastAPI
from routes.health import router as health_router
from routes.upload import router as upload_router

app = FastAPI(
    title="Medical Research Analyzer API",
    version="1.0.0",
)

app.include_router(health_router)
app.include_router(upload_router)