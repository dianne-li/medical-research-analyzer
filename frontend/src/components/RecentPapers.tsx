function RecentPapers() {
  return (
    <section style={{ marginTop: "4rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2 style={{ margin: 0 }}>Recent Papers</h2>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "2rem",
          backgroundColor: "white",
          textAlign: "center",
          color: "#777",
        }}
      >
        No papers analyzed yet.
      </div>
    </section>
  );
}

export default RecentPapers;