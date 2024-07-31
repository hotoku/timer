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
        <Button onClick={startHandler} $isFirst={true}>
          start
        </Button>
        <Button onClick={stopHandler} $isFirst={false}>
          stop
        </Button>
      </div>
    </Panel>
  );
}

export default Controller;

const Panel = styled.div`
  padding: var(--basic-gap);
  background-color: var(--bg-color);
  margin-bottom: var(--basic-gap);
  border-radius: var(--basic-radius);
`;

const Status = styled.div`
  margin-bottom: calc(var(--basic-gap) * 2);
`;

const Button = styled.button<{ $isFirst: boolean }>`
  ${(props) => (props.$isFirst ? "" : "margin-left: var(--small-gap);")}
  margin-top: var(--basic-gap);
  background-color: var(--primary-color);
  color: var(--bg-color);
  padding: var(--small-gap) calc(var(--basic-gap) * 2);
  border-radius: var(--basic-radius);
`;
