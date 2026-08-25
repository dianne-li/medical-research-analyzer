import re

from models.paper_summary import PaperSummary


EVIDENCE_FIELDS = [
    "study_design",
    "population",
    "sample_size",
    "intervention",
    "primary_outcome",
    "secondary_outcomes",
    "main_findings",
    "limitations",
    "clinical_significance",
    "key_statistics",
    "strengths",
    "weaknesses",
]


def normalize_text(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip().lower()


def verify_quotes(
    summary: PaperSummary,
    paper_text: str,
) -> PaperSummary:
    normalized_paper = normalize_text(paper_text)

    for field_name in EVIDENCE_FIELDS:
        field = getattr(summary, field_name)

        verified_quotes = []

        for quote in field.quotes:
            normalized_quote = normalize_text(quote)

            if normalized_quote in normalized_paper:
                verified_quotes.append(quote)

        field.quotes = verified_quotes

    return summary