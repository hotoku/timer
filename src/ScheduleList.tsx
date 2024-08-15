import React, { useEffect, useState } from "react";
import { loadSchedules, Schedule } from "./Storage";
import Panel from "./Panel";
import { styled } from "styled-components";
import { bellAtom } from "./atoms";
import { useAtom } from "jotai";
import Bell from "./Bell";

function ScheduleList(): React.ReactElement {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [bell, setBell] = useAtom(bellAtom);

  useEffect(() => {
    const ss = loadSchedules();
    setSchedules(ss);
    if (ss.length > 0) {
      setBell(new Bell(false, ss[0].intervals, ss[0].tones));
    }
  }, [setBell]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const s = schedules[parseInt(e.target.value)];
    bell.stop();
    setBell(new Bell(false, s.intervals, s.tones));
  };

  return (
    <Panel>
      <SelectList onChange={handleChange}>
        {schedules.map((s, i) => {
          return (
            <option key={i} value={i}>
              {s.name}
            </option>
          );
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
