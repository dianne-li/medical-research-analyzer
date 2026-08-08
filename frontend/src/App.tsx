function App() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Medical Research Analyzer</h1>

      <p>
        Upload a medical research paper to receive an AI-generated structured
        summary.
      </p>

      <button
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Upload PDF
      </button>

      <hr style={{ margin: "2rem 0" }} />

      <p style={{ color: "#666" }}>
        Research and educational use only. This tool does not provide medical
        advice.
      </p>
    </main>
  );
}

export default App;