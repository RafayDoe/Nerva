function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "80px 40px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            marginBottom: "16px",
          }}
        >
          Simple Pricing
        </h2>

        <p
          style={{
            color: "#555",
            marginBottom: "50px",
          }}
        >
          Start learning cryptography with no hidden costs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
          }}
        >
          <div
            style={{
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h3>Free</h3>
            <p style={{ fontSize: "2rem", margin: "20px 0" }}>$0</p>
            <ul style={{ listStyle: "none", padding: 0, color: "#555" }}>
              <li>✓ Basic concepts</li>
              <li>✓ Intro lessons</li>
              <li>✓ Limited practice</li>
            </ul>
          </div>

          <div
            style={{
              padding: "30px",
              border: "2px solid #111",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h3>Pro</h3>
            <p style={{ fontSize: "2rem", margin: "20px 0" }}>$9 / month</p>
            <ul style={{ listStyle: "none", padding: 0, color: "#555" }}>
              <li>✓ Full curriculum</li>
              <li>✓ Real-world examples</li>
              <li>✓ Practice challenges</li>
              <li>✓ Progress tracking</li>
            </ul>
          </div>

          <div
            style={{
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <h3>Lifetime</h3>
            <p style={{ fontSize: "2rem", margin: "20px 0" }}>$49</p>
            <ul style={{ listStyle: "none", padding: 0, color: "#555" }}>
              <li>✓ Everything in Pro</li>
              <li>✓ Lifetime access</li>
              <li>✓ Future updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
