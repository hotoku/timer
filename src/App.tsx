import React from "react";

import Controller from "./Controller";
import Scheduler from "./Scheduler";
import { styled } from "styled-components";
import ScheduleList from "./ScheduleList";

function App(): React.ReactElement {
  return (
    <Base>
      <Controller />
      <ScheduleList />
      <Scheduler />
    </Base>
  );
}

export default App;

const Base = styled.div`
  font-family: var(--font-family);
  color: var(--text-color);
  width: 20rem;
  margin: 0 auto;
`;
