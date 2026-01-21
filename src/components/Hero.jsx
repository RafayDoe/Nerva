import Button from "./Button";
import folds from "../assets/folds.jfif";

function Hero({ logger }) {
  return (
    <main
      style={{
        backgroundImage: `url(${folds})`,
        height: "70vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={() => logger("Hover over main in Hero started")}
      onMouseLeave={() => logger("Hover over main in Hero ended")}
    >
      <div
        style={{
          background: "rgba(10, 10, 10, 0.7)",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h1
          className="main"
          style={{
            color: "white",
            marginLeft: "40px",
            marginTop: "10%",
          }}
        >
          Welcome to Nerva.
        </h1>
        <p
          className="main"
          style={{ marginLeft: "40px", marginBottom: "20px" }}
        >
          The Best Web-App to learn Cryptography
        </p>
        <div style={{ marginLeft: "40px", marginTop: "20px" }}>
          <Button
            color="black"
            bgColor="White"
            text="Learn More"
            logger={logger}
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;
