import { useState } from "react";
import { uploadPDF } from "../services/uploadService";
import type { UploadResponse } from "../services/uploadService";

interface UploadBoxProps {
  onAnalysisComplete: (result: UploadResponse) => void;
}

function UploadBox({ onAnalysisComplete }: UploadBoxProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");
    setLoading(true);

    try {
      const result = await uploadPDF(file);

      onAnalysisComplete(result);
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

      <h2
        style={{
          marginBottom: "0.5rem",
          color: "#222",
        }}
      >
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
    </div>
  );
}

export default UploadBox;