import React, { useState } from "react";
import { useAtomValue } from "jotai";
import { bellAtom } from "./atoms";
import styled from "styled-components";

function Controller(): React.ReactElement {
  const bell = useAtomValue(bellAtom);
  console.log("Contrloller");

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
    <Panel>
      <Status className="status">running={`${running}`}</Status>
      <div className="buttons">
        <button onClick={startHandler}>start</button>
        <button style={{ marginLeft: "5px" }} onClick={stopHandler}>
          stop
        </button>
      </div>
    </Panel>
  );
}

export default Controller;

const Panel = styled.div`
  padding: 5px;
  background-color: #ddd;
  margin-bottom: 5px;
  border-radius: 3px;
`;

const Status = styled.div`
  margin-bottom: 10px;
`;
