import { useEffect } from "react";

function Logs({ logCheck, logs }) {
  useEffect(() => {
    console.log("Logs Mounted");
  }, []);

  const listLogs = logs.map(([id, title, time]) => (
    <li key={id}>
      {time} - {title}
    </li>
  ));

  return (
    <>
      <button
        style={{
          margin: "10px",
          backgroundColor: "lightblue",
          color: "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        onClick={logCheck}
      >
        Return
      </button>

      <ul>{listLogs}</ul>
    </>
  );
}

export default Logs;
