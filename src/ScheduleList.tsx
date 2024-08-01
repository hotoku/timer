import React, { useEffect, useState } from "react";
import { loadSchedules, Schedule } from "./Storage";
import Panel from "./Panel";
import { styled } from "styled-components";

function ScheduleList(): React.ReactElement {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const ss = loadSchedules();
    setSchedules(ss);
  }, []);

  return (
    <Panel>
      <SelectList>
        {schedules.map((s, i) => {
          return <option key={i}>{s.name}</option>;
        })}
      </SelectList>
    </Panel>
  );
}

export default ScheduleList;

const SelectList = styled.select`
  font-size: 1.5rem;
  border: none;
`;
