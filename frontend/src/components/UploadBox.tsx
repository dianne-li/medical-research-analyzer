function UploadBox() {
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

      <button
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        Choose PDF
      </button>

      <p
        style={{
          marginTop: "1rem",
          color: "#999",
          fontSize: "13px",
        }}
      >
        PDF files only
      </p>
    </div>
  );
}

export default UploadBox;