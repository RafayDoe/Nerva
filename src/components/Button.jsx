function Button({ text, bgColor, color }) {
  return (
    <a href="#">
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
      >
        {text}
      </button>
    </a>
  );
}

export default Button;
