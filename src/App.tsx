import { useEffect, useState } from "react";
import { ringBell } from "./utils";

function App() {
  const [running, setRunning] = useState(false);
  const [schedule, setSchedule] = useState<ReturnType<typeof startRing> | null>(
    null
  );
  const startRing = () => {
    ringBell();
    const ret = setInterval(() => {
      ringBell();
    }, 1000);
    setSchedule(ret);
    return ret;
  };
  const stopRing = () => {
    if (schedule) {
      clearInterval(schedule);
      setSchedule(null);
    }
  };
  return (
    <>
      <div>running = {JSON.stringify(running)}</div>
      <div>
        <button onClick={startRing}>start</button>
        <button onClick={stopRing}>stop</button>
      </div>
      <div>
        <button onClick={ringBell}>ring</button>
      </div>
    </>
  );
}

export default App;
