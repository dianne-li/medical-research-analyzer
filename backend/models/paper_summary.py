from pydantic import BaseModel


class EvidenceField(BaseModel):
    content: str
    quotes: list[str]


class PaperSummary(BaseModel):
    title: str
    authors: str
    journal: str
    publication_year: str

    study_design: EvidenceField
    population: EvidenceField
    sample_size: EvidenceField

    intervention: EvidenceField
    primary_outcome: EvidenceField
    secondary_outcomes: EvidenceField

    main_findings: EvidenceField
    limitations: EvidenceField
    clinical_significance: EvidenceField

    key_statistics: EvidenceField

    strengths: EvidenceField
    weaknesses: EvidenceField

    summary_confidence: str