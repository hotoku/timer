import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { bellAtom, runningAtom } from "./atoms";
import styled from "styled-components";

function Controller(): React.ReactElement {
  const [bell, setBell] = useAtom(bellAtom);
  const running = useAtomValue(runningAtom);

  const startHandler = () => {
    setBell(bell.start());
  };
  const stopHandler = () => {
    setBell(bell.stop());
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
