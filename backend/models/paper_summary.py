from pydantic import BaseModel


class PaperSummary(BaseModel):
    title: str
    authors: str
    journal: str
    publication_year: str

    study_design: str
    population: str
    sample_size: str

    intervention: str
    primary_outcome: str
    secondary_outcomes: str

    main_findings: str
    limitations: str
    clinical_significance: str

    key_statistics: str

    strengths: str
    weaknesses: str

    summary_confidence: str