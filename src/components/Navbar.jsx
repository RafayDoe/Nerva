function Navbar({ logCheck, logger }) {
  return (
    <nav
      style={{
        backgroundColor: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <a href="#" style={{ color: "white", fontSize: "20px" }}>
        Nerva
      </a>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
          padding: "0px",
          gap: "1rem",
          marginRight: "10px",
        }}
      >
        <li>
          <a
            style={{ color: "white" }}
            href="https://github.com/RafayDoe"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            style={{ color: "white" }}
            href="https://www.instagram.com/s.rafay.a"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/syed-ahmed-458819319/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <button
            style={{
              color: "black",
              backgroundColor: "White",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "1rem",
            }}
            onClick={() => {
              logCheck();
              logger("Log Mounted");
            }}
          >
            Logs
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
