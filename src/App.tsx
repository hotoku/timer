import React from "react";

import Controller from "./Controller";
import Scheduler from "./Scheduler";
import { styled } from "styled-components";

function App(): React.ReactElement {
  return (
    <Base>
      <Controller />
      <Scheduler />
    </Base>
  );
}

export default App;

const Base = styled.div`
  font-family: var(--font-family);
  color: var(--text-color);
`;
