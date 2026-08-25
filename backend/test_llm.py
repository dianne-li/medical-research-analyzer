from pathlib import Path

from services.pdf_service import extract_text, clean_text
from services.llm_service import generate_summary

pdf_path = Path("sample.pdf")

with open(pdf_path, "rb") as f:
    pdf_bytes = f.read()

text = extract_text(pdf_bytes)
text = clean_text(text)

summary = generate_summary(text)

print(summary.model_dump_json(indent=2))