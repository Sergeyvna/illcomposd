// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      position: "sticky",
      top: 0,
      background: "rgba(251,241,227,0.8)",
      backdropFilter: "blur(10px)"
    }}>
      <h2 style={{ color: "#2457ff", margin: 0 }}>
        MLA
      </h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#about">About</a>
        <a href="#projects">Collections</a>
      </div>
    </nav>
  );
}