function Button({ text, bgColor, color, logger }) {
  return (
    <button
      style={{
        color,
        backgroundColor: bgColor,
        padding: "10px 20px",
        fontSize: "1.2rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onMouseEnter={() => logger("Hover over Button started")}
      onMouseLeave={() => logger("Hover over Button ended")}
      onClick={() => logger("Button Clicked")}
    >
      {text}
    </button>
  );
}

export default Button;
