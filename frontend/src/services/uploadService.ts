export interface EvidenceField {
  content: string;
  quotes: string[];
}

export interface PaperSummary {
  title: string;
  authors: string;
  journal: string;
  publication_year: string;

  study_design: EvidenceField;
  population: EvidenceField;
  sample_size: EvidenceField;

  intervention: EvidenceField;
  primary_outcome: EvidenceField;
  secondary_outcomes: EvidenceField;

  main_findings: EvidenceField;
  limitations: EvidenceField;
  clinical_significance: EvidenceField;

  key_statistics: EvidenceField;

  strengths: EvidenceField;
  weaknesses: EvidenceField;

  summary_confidence: string;
}

export interface UploadResponse {
  filename: string;
  message: string;
  summary: PaperSummary;
}

export async function uploadPDF(
  file: File
): Promise<UploadResponse> {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "http://127.0.0.1:8000/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(
      errorData.detail || "Failed to analyze PDF."
    );
  }

  return response.json();
}