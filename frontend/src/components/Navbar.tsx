function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 2rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      <strong>Medical Research Analyzer</strong>

      <span style={{ color: "#666" }}>Saved Papers</span>
    </nav>
  );
}

export default Navbar;