from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "Medical Research Analyzer API is running"
    }