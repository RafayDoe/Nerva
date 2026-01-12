import Button from "./Button";

function FollowUp() {
  return (
    <section
      style={{
        padding: "80px 40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: "600",
          }}
        >
          Learn Cryptography the Right Way
        </h2>

        <p
          style={{
            lineHeight: "1.6",
            color: "#444",
            maxWidth: "700px",
          }}
        >
          Nerva is designed to help you understand cryptography from first
          principles — not just memorize algorithms. Learn how things work, why
          they exist, and how to apply them securely in real applications.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Button color="white" bgColor="#0080FF" text="Get Started" />
        </div>
      </div>
    </section>
  );
}

export default FollowUp;
