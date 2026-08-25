import type { PaperSummary } from "../services/uploadService";
import SummaryCard from "./SummaryCard";

interface AnalysisSectionProps {
  summary: PaperSummary;
  filename: string;
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      style={{
        fontSize: "20px",
        fontWeight: 700,
        color: "#374151",
        marginTop: 0,
        marginBottom: "1.25rem",
        paddingBottom: "0.75rem",
        borderBottom: "1px solid #d9dce1",
      }}
    >
      {children}
    </h2>
  );
}

function AnalysisSection({
  summary,
  filename,
}: AnalysisSectionProps) {
  return (
    <section>
      {/* Paper header */}
      <header
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            margin: 0,
            marginBottom: "0.75rem",
            color: "#7b7f86",
            fontSize: "13px",
          }}
        >
          {filename}
        </p>

        <h1
          style={{
            margin: 0,
            color: "#222",
            fontSize: "2.25rem",
            lineHeight: 1.2,
            maxWidth: "850px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {summary.title}
        </h1>

        <p
          style={{
            marginTop: "1rem",
            marginBottom: 0,
            color: "#666",
            fontSize: "16px",
          }}
        >
          {summary.authors}
        </p>
      </header>

      {/* Study Overview */}
      <section
        style={{
          marginBottom: "3.5rem",
        }}
      >
        <SectionHeading>Study Overview</SectionHeading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <SummaryCard
            title="Journal"
            content={summary.journal}
          />

          <SummaryCard
            title="Publication Year"
            content={summary.publication_year}
          />

          <SummaryCard
            title="Study Design"
            content={summary.study_design.content}
            quotes={summary.study_design.quotes}
          />

          <SummaryCard
            title="Sample Size"
            content={summary.sample_size.content}
            quotes={summary.sample_size.quotes}
          />
        </div>
      </section>

      {/* Population & Intervention */}
      <section
        style={{
          marginBottom: "3.5rem",
        }}
      >
        <SectionHeading>
          Population & Intervention
        </SectionHeading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <SummaryCard
            title="Population"
            content={summary.population.content}
            quotes={summary.population.quotes}
          />

          <SummaryCard
            title="Intervention"
            content={summary.intervention.content}
            quotes={summary.intervention.quotes}
          />
        </div>
      </section>

      {/* Outcomes */}
      <section
        style={{
          marginBottom: "3.5rem",
        }}
      >
        <SectionHeading>Outcomes</SectionHeading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <SummaryCard
            title="Primary Outcome"
            content={summary.primary_outcome.content}
            quotes={summary.primary_outcome.quotes}
          />

          <SummaryCard
            title="Secondary Outcomes"
            content={summary.secondary_outcomes.content}
            quotes={summary.secondary_outcomes.quotes}
          />
        </div>
      </section>

      {/* Findings */}
      <section
        style={{
          marginBottom: "3.5rem",
        }}
      >
        <SectionHeading>Findings</SectionHeading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <SummaryCard
            title="Main Findings"
            content={summary.main_findings.content}
            quotes={summary.main_findings.quotes}
          />

          <SummaryCard
            title="Clinical Significance"
            content={summary.clinical_significance.content}
            quotes={summary.clinical_significance.quotes}
          />

          <SummaryCard
            title="Key Statistics"
            content={summary.key_statistics.content}
            quotes={summary.key_statistics.quotes}
          />
        </div>
      </section>

      {/* Study Evaluation */}
      <section>
        <SectionHeading>Study Evaluation</SectionHeading>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <SummaryCard
            title="Strengths"
            content={summary.strengths.content}
            quotes={summary.strengths.quotes}
          />

          <SummaryCard
            title="Weaknesses"
            content={summary.weaknesses.content}
            quotes={summary.weaknesses.quotes}
          />

          <SummaryCard
            title="Limitations"
            content={summary.limitations.content}
            quotes={summary.limitations.quotes}
          />

          <SummaryCard
            title="Summary Confidence"
            content={summary.summary_confidence}
          />
        </div>
      </section>
    </section>
  );
}

export default AnalysisSection;