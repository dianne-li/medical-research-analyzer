export interface PaperSummary {
  title: string;
  authors: string;
  journal: string;
  publication_year: string;

  study_design: string;
  population: string;
  sample_size: string;

  intervention: string;
  primary_outcome: string;
  secondary_outcomes: string;

  main_findings: string;
  limitations: string;
  clinical_significance: string;

  key_statistics: string;

  strengths: string;
  weaknesses: string;

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
    throw new Error("Upload failed.");
  }

  return await response.json();
}