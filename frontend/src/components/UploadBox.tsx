function UploadBox() {
  return (
    <div
      style={{
        border: "2px dashed #bbb",
        borderRadius: "12px",
        padding: "3rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <h3>Upload a research paper</h3>

      <p style={{ color: "#666" }}>
        Drag and drop a PDF here or choose a file.
      </p>

      <button
        style={{
          padding: "12px 20px",
          marginTop: "1rem",
          cursor: "pointer",
        }}
      >
        Choose PDF
      </button>

      <p
        style={{
          color: "#888",
          fontSize: "14px",
          marginTop: "1rem",
        }}
      >
        PDF files only
      </p>
    </div>
  );
}

export default UploadBox;