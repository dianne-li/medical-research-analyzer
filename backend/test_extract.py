from pathlib import Path

from services.pdf_service import extract_text

pdf_path = Path("sample.pdf")

with open(pdf_path, "rb") as f:
    pdf_bytes = f.read()

text = extract_text(pdf_bytes)

print(text[:1000])