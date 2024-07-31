import React, { useEffect, useRef, useState } from "react";
import Bell from "./Bell";

import "./App.css";

function App(): React.ReactElement {
  const bell = useRef<Bell | null>(null);
  const [running, setRunning] = useState(false);
  const [intervals, setIntervals] = useState<number[]>([]);
  const startHandler = () => {
    if (bell.current) {
      bell.current.start();
      setRunning(bell.current.running);
    }
  };
  const stopHandler = () => {
    if (bell.current) {
      bell.current.stop();
      setRunning(bell.current.running);
    }
  };

  useEffect(() => {
    bell.current = new Bell();
  }, []);
  return (
    <div className="app">
      <div className="controller">
        <div className="status">running={`${running}`}</div>
        <div className="buttons">
          <button className="button" onClick={startHandler}>
            start
          </button>
          <button className="button" onClick={stopHandler}>
            stop
          </button>
        </div>
      </div>
      <div className="scheduler">
        {intervals.map((interval, index) => {
          return (
            <div key={index} className="interval">
              <span>{interval}</span>
              <button>-</button>
            </div>
          );
        })}
        <input type="number" min={1} />
        <button onClick={() => console.log("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
