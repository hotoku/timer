import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { bellAtom } from "./atoms";

function Controller(): React.ReactElement {
  const bell = useAtomValue(bellAtom);

  const [running, setRunning] = useState(false);
  const startHandler = () => {
    bell.start();
    setRunning(bell.running);
  };
  const stopHandler = () => {
    bell.stop();
    setRunning(bell.running);
  };

  return (
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
  );
}

export default Controller;
