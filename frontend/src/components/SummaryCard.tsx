interface SummaryCardProps {
  title: string;
  content: string;
}

function SummaryCard({ title, content }: SummaryCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "1.5rem",
        backgroundColor: "white",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "0.75rem",
          fontSize: "16px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#555",
          lineHeight: 1.6,
        }}
      >
        {content}
      </p>
    </div>
  );
}

export default SummaryCard;