import { useAtom } from "jotai";
import React, { useState } from "react";
import { styled } from "styled-components";
import { bellAtom } from "./atoms";
import Bell from "./Bell";

function Scheduler(): React.ReactElement {
  const [bell, setBell] = useAtom(bellAtom);
  const [val, setVal] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = 0;
    try {
      val = parseFloat(e.target.value);
    } catch (e) {
      console.error(e);
    }
    setVal(val);
  };
  const handleMinus = (i: number) => () => {
    const intervals = bell.intervals.filter((_, j) => i !== j);
    const ret = bell.stop();
    const ret2 = new Bell(ret.running, intervals);
    setBell(ret2);
  };
  const handlePlus = () => {
    const intervals = [...bell.intervals, val];
    const ret = bell.stop();
    const ret2 = new Bell(ret.running, intervals);
    setBell(ret2);
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
      <SaveButton onClick={() => setBell(bell.stop())}>save</SaveButton>
    </Panel>
  );
}

export default Scheduler;

const Panel = styled.div`
  padding: var(--basic-gap);
  background-color: transparent;
  border: var(--border-width) solid var(--primary-color);
  margin-bottom: var(--basic-gap);
  border-radius: var(--basic-radius);
  font-size: 1.5rem;
`;

const ScheduleLine = styled.div<{ $isFirst: boolean }>`
  ${(props) => (props.$isFirst ? "" : "margin-top: var(--small-gap);")}
`;
const ScheduleValue = styled.span`
  display: inline-block;
  min-width: 5rem;
  text-align: center;
`;
const ScheduleButton = styled.button<{ disabled: boolean }>`
  background-color: var(--secondary-color);
  color: var(--light-text-color);
  width: 2rem;
  height: 2rem;
  margin-left: var(--basic-gap);
  border-radius: var(--basic-radius);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 1.5rem;
`;
const ScheduleInput = styled.input`
  width: 5rem;
  height: 2rem;
  background-color: var(--bg-color);
  border-radius: var(--basic-radius);
  font-size: 1.5rem;
`;
const SaveButton = styled.button`
  margin-top: var(--basic-gap);
  background-color: var(--primary-color);
  color: var(--light-text-color);
  padding: var(--basic-gap) calc(var(--basic-gap) * 2);
  border-radius: var(--basic-radius);
  font-size: 1.5rem;
`;
