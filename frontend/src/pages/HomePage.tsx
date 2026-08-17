import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";

function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "4rem 2rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <section style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Understand medical research faster
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Upload a medical research paper and receive a structured analysis
            of its study design, population, outcomes, findings, statistics,
            strengths, limitations, and clinical significance.
          </p>
        </section>

        <UploadBox />

        <p
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "#888",
            fontSize: "14px",
          }}
        >
          Research and educational use only. This tool does not provide medical
          advice.
        </p>
      </main>
    </>
  );
}

export default HomePage;