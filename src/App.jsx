import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Logs from "./components/Logs";

function App() {
  const [showLanding, setShow] = useState(true);
  const [logs, setLogs] = useState([]);
  const logChecker = () => {
    setShow((prev) => !prev);
  };
  const logger = (title) => {
    setLogs((prev) => [
      ...prev,
      [prev.length + 1, title, new Date().toLocaleTimeString()],
    ]);
  };
  return (
    <>
      {(showLanding && <Landing logCheck={logChecker} logger={logger} />) || (
        <Logs logCheck={logChecker} logs={logs} />
      )}
    </>
  );
}

export default App;
