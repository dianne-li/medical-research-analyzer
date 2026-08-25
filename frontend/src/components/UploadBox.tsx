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
        Drag and drop a PDF here or choose a file from your computer.
      </p>

      <label
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          borderRadius: "8px",
          padding: "12px 20px",
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        Choose PDF

        <input
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileSelect}
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
        <p style={{ marginTop: "1rem" }}>
          Uploading...
        </p>
      )}

      {error && (
        <p
          style={{
            marginTop: "1rem",
            color: "red",
          }}
        >
          {error}
        </p>
      )}

      {uploadResult && (
        <div
          style={{
            marginTop: "1.5rem",
            textAlign: "left",
            backgroundColor: "#f4f4f4",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <strong>Upload Successful</strong>

          <p>
            <strong>Filename:</strong> {uploadResult.filename}
          </p>

          <p>
            <strong>Message:</strong> {uploadResult.message}
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadBox;