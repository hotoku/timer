import { useAtom } from "jotai";
import React, { useState } from "react";
import { styled } from "styled-components";
import { bellAtom } from "./atoms";

function Scheduler(): React.ReactElement {
  const [bell, setBell] = useAtom(bellAtom);
  const [val, setVal] = useState(0);
  console.log("Scheduler");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setVal(0);
    } else {
      setVal(parseInt(e.target.value));
    }
  };
  const handleMinus = (i: number) => () => {
    const intervals = bell.intervals.filter((_, j) => i !== j);
    console.log("intervals", intervals);
    const ret = bell.stop();
    ret.intervals = intervals;
    setBell(ret);
  };
  const handlePlus = () => {
    const intervals = [...bell.intervals, val];
    const ret = bell.stop();
    ret.intervals = intervals;
    setBell(ret);
    setVal(0);
  };

  return (
    <Panel>
      {bell.intervals.map((s, i) => {
        return (
          <ScheduleLine key={i} $isFirst={i === 0}>
            <ScheduleValue>{s}</ScheduleValue>
            <ScheduleButton
              onClick={handleMinus(i)}
              disabled={bell.intervals.length < 2}
            >
              -
            </ScheduleButton>
          </ScheduleLine>
        );
      })}
      <ScheduleLine $isFirst={false}>
        <ScheduleInput
          type="number"
          min={0}
          value={val}
          onChange={handleInput}
        />
        <ScheduleButton onClick={handlePlus} disabled={val < 1}>
          +
        </ScheduleButton>
      </ScheduleLine>
    </Panel>
  );
}

export default Scheduler;

const Panel = styled.div`
  padding: 5px;
  background-color: #ddd;
  margin-bottom: 5px;
  border-radius: 3px;
`;

const ScheduleLine = styled.div<{ $isFirst: boolean }>`
  ${(props) => (props.$isFirst ? "" : "margin-top: 3px;")}
`;
const ScheduleValue = styled.span`
  display: inline-block;
  min-width: 50px;
  text-align: center;
`;
const ScheduleButton = styled.button`
  margin-left: 5px;
  width: 30px;
`;
const ScheduleInput = styled.input`
  width: 50px;
`;
