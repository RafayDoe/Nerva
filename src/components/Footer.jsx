function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#aaa",
        padding: "30px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: "0.85rem",
        }}
      >
        <span>© {new Date().getFullYear()} Nerva</span>
        <span>Built with React by Rafay</span>
      </div>
    </footer>
  );
}

export default Footer;
