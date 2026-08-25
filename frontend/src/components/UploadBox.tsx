import { useState } from "react";
import { uploadPDF } from "../services/uploadService";
import type { UploadResponse } from "../services/uploadService";

function UploadBox() {
  const [uploadResult, setUploadResult] =
    useState<UploadResponse | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploadResult(null);
    setError("");
    setLoading(true);

    try {
      const result = await uploadPDF(file);
      setUploadResult(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "2px dashed #c8c8c8",
        borderRadius: "16px",
        padding: "3.5rem 2rem",
        textAlign: "center",
        marginTop: "2.5rem",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        📄
      </div>

      <h2 style={{ marginBottom: "0.5rem" }}>
        Upload a research paper
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "1.5rem",
        }}
      >
        Choose a PDF from your computer to generate a structured research
        summary.
      </p>

      <label
        style={{
          backgroundColor: loading ? "#6b7280" : "#1f2937",
          color: "white",
          borderRadius: "8px",
          padding: "12px 20px",
          cursor: loading ? "not-allowed" : "pointer",
          display: "inline-block",
        }}
      >
        {loading ? "Analyzing..." : "Choose PDF"}

        <input
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileSelect}
          disabled={loading}
        />
      </label>

      <p
        style={{
          marginTop: "1rem",
          color: "#999",
          fontSize: "13px",
        }}
      >
        PDF files only
      </p>

      {loading && (
        <p
          style={{
            marginTop: "1.5rem",
            color: "#555",
          }}
        >
          Analyzing paper. This may take a few moments.
        </p>
      )}

      {error && (
        <p
          style={{
            marginTop: "1.5rem",
            color: "#b91c1c",
          }}
        >
          {error}
        </p>
      )}

      {uploadResult && (
        <div
          style={{
            marginTop: "2rem",
            textAlign: "left",
            backgroundColor: "#f4f4f4",
            padding: "1.5rem",
            borderRadius: "12px",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "1rem",
            }}
          >
            Analysis Complete
          </h3>

          <p>
            <strong>Title:</strong>{" "}
            {uploadResult.summary.title}
          </p>

          <p>
            <strong>Authors:</strong>{" "}
            {uploadResult.summary.authors}
          </p>

          <p>
            <strong>Journal:</strong>{" "}
            {uploadResult.summary.journal}
          </p>

          <p>
            <strong>Publication Year:</strong>{" "}
            {uploadResult.summary.publication_year}
          </p>

          <p>
            <strong>Study Design:</strong>{" "}
            {uploadResult.summary.study_design}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {uploadResult.summary.population}
          </p>

          <p>
            <strong>Sample Size:</strong>{" "}
            {uploadResult.summary.sample_size}
          </p>

          <p>
            <strong>Intervention:</strong>{" "}
            {uploadResult.summary.intervention}
          </p>

          <p>
            <strong>Primary Outcome:</strong>{" "}
            {uploadResult.summary.primary_outcome}
          </p>

          <p>
            <strong>Secondary Outcomes:</strong>{" "}
            {uploadResult.summary.secondary_outcomes}
          </p>

          <p>
            <strong>Main Findings:</strong>{" "}
            {uploadResult.summary.main_findings}
          </p>

          <p>
            <strong>Limitations:</strong>{" "}
            {uploadResult.summary.limitations}
          </p>

          <p>
            <strong>Clinical Significance:</strong>{" "}
            {uploadResult.summary.clinical_significance}
          </p>

          <p>
            <strong>Key Statistics:</strong>{" "}
            {uploadResult.summary.key_statistics}
          </p>

          <p>
            <strong>Strengths:</strong>{" "}
            {uploadResult.summary.strengths}
          </p>

          <p>
            <strong>Weaknesses:</strong>{" "}
            {uploadResult.summary.weaknesses}
          </p>

          <p>
            <strong>Summary Confidence:</strong>{" "}
            {uploadResult.summary.summary_confidence}
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadBox;