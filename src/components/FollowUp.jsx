import Button from "./Button";

function FollowUp({ logger }) {
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
        onMouseEnter={() => logger("hover on div in FollowUp started")}
        onMouseLeave={() => logger("hover on div in FollowUp ended")}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: "600",
          }}
          onMouseEnter={() => logger("hover on h2 in FollowUp started")}
          onMouseLeave={() => logger("hover on h2 in FollowUp ended")}
        >
          Learn Cryptography the Right Way
        </h2>

        <p
          style={{
            lineHeight: "1.6",
            color: "#444",
            maxWidth: "700px",
          }}
          onMouseEnter={() => logger("hover on p in FollowUp started")}
          onMouseLeave={() => logger("hover on p in FollowUp ended")}
        >
          Nerva is designed to help you understand cryptography from first
          principles — not just memorize algorithms. Learn how things work, why
          they exist, and how to apply them securely in real applications.
        </p>

        <div
          style={{ marginTop: "20px" }}
          onMouseEnter={() => logger("hover on button div in FollowUp started")}
          onMouseLeave={() => logger("hover on button div in FollowUp ended")}
        >
          <Button
            color="white"
            bgColor="#0080FF"
            text="Get Started"
            logger={logger}
          />
        </div>
      </div>
    </section>
  );
}

export default FollowUp;
