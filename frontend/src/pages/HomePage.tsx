import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";
import RecentPapers from "../components/RecentPapers";

function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "5rem 2rem",
        }}
      >
        <section style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#777",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "1rem",
            }}
          >
            AI-assisted research analysis
          </p>

          <h1
            style={{
              fontSize: "42px",
              marginBottom: "1rem",
              color: "#222",
            }}
          >
            Understand medical research faster
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#666",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Upload a medical research paper and receive a structured analysis
            of its study design, population, outcomes, findings, statistics,
            strengths, limitations, and clinical significance.
          </p>
        </section>

        <UploadBox />

        <RecentPapers />

        <p
          style={{
            textAlign: "center",
            marginTop: "4rem",
            color: "#999",
            fontSize: "12px",
          }}
        >
          Research and educational use only. This tool does not provide medical
          advice.
        </p>
      </main>
    </div>
  );
}

export default HomePage;