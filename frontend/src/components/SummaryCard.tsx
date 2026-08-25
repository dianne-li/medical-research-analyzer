interface SummaryCardProps {
  title: string;
  content: string;
  quotes?: string[];
}

function SummaryCard({
  title,
  content,
  quotes = [],
}: SummaryCardProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #e2e4e8",
        borderRadius: "14px",
        padding: "1.75rem 2rem",
        textAlign: "left",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: "0.75rem",
          fontSize: "15px",
          fontWeight: 700,
          color: "#6b7280",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#333",
          lineHeight: 1.7,
          fontSize: "16px",
          maxWidth: "850px",
        }}
      >
        {content}
      </p>

      {quotes.length > 0 && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem 1.25rem",
            backgroundColor: "#f6f7f9",
            borderRadius: "10px",
            borderLeft: "3px solid #9ca3af",
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: "0.75rem",
              fontSize: "12px",
              fontWeight: 700,
              color: "#6b7280",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Supporting evidence
          </p>

          {quotes.map((quote, index) => (
            <p
              key={index}
              style={{
                margin:
                  index === quotes.length - 1
                    ? 0
                    : "0 0 0.75rem 0",
                color: "#555",
                fontSize: "14px",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              “{quote}”
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SummaryCard;