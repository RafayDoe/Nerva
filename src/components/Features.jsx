import desk from "../assets/desk.jpg";
import desk2 from "../assets/desk2.jpg";
import woman from "../assets/woman.jpg";

function Features({ logger }) {
  return (
    <section
      style={{
        padding: "20px 40px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
        }}
        onMouseEnter={() => logger("Hover over wrapper in Features started")}
        onMouseLeave={() => logger("Hover over wrapper in Features ended")}
      >
        <div
          onMouseEnter={() => logger("Hover over div 1 in Features started")}
          onMouseLeave={() => logger("Hover over div 1 in Features ended")}
        >
          <img src={desk} alt="Desk" className="feature-image" />
          <h3>Concept-First Learning</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Understand cryptography from the ground up instead of memorizing
            formulas and algorithms.
          </p>
        </div>

        <div
          onMouseEnter={() => logger("Hover over div 2 in Features started")}
          onMouseLeave={() => logger("Hover over div 2 in Features ended")}
        >
          <img src={desk2} alt="Desk" className="feature-image" />
          <h3>Hands-On Practice</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Apply what you learn through interactive examples and real-world use
            cases.
          </p>
        </div>

        <div
          onMouseEnter={() => logger("Hover over div 3 in Features started")}
          onMouseLeave={() => logger("Hover over div 3 in Features ended")}
        >
          <img src={woman} alt="Desk" className="feature-image" />
          <h3>Built for Developers</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Learn how cryptography is actually used in modern web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
