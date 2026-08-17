function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "18px" }}>
          Medical Research Analyzer
        </strong>

        <button
          style={{
            border: "none",
            background: "none",
            color: "#666",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Saved Papers
        </button>
      </div>
    </nav>
  );
}

export default Navbar;