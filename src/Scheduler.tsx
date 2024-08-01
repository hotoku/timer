import { useAtom } from "jotai";
import React, { useState } from "react";
import { styled } from "styled-components";
import { bellAtom } from "./atoms";
import Bell from "./Bell";
import { saveSchedule } from "./Storage";
import Panel from "./Panel";

function Scheduler(): React.ReactElement {
  const [bell, setBell] = useAtom(bellAtom);
  const [val, setVal] = useState(0);
  const [name, setName] = useState("");

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
  const handleSave = () => {
    setBell(bell.stop());
    const obj = {
      name: name,
      intervals: bell.intervals,
    };
    saveSchedule(obj);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Panel>
      <Inner>
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
        <ScheduleLine $isFirst={false}>
          <SaveButton disabled={name === ""} onClick={handleSave}>
            save
          </SaveButton>
          <NameInput type="text" value={name} onChange={handleNameChange} />
        </ScheduleLine>
      </Inner>
    </Panel>
  );
}

export default Scheduler;

const Inner = styled.div`
  margin: 0 auto;
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
  margin-left: var(--small-gap);
  border-radius: var(--basic-radius);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-size: 1.5rem;
`;
const ScheduleInput = styled.input`
  display: inline-block;
  width: 5rem;
  height: 2rem;
  background-color: var(--bg-color);
  border-radius: var(--basic-radius);
  font-size: 1.5rem;
  text-align: center;
  vertical-align: top;
`;
const SaveButton = styled.button<{ disabled: boolean }>`
  background-color: var(--primary-color);
  color: var(--light-text-color);
  border-radius: var(--basic-radius);
  width: 5rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1.5rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
const NameInput = styled.input`
  display: inline-block;
  width: 10rem;
  height: 2rem;
  background-color: var(--bg-color);
  border-radius: var(--basic-radius);
  font-size: 1.5rem;
  text-align: center;
  margin-left: var(--small-gap);
  vertical-align: top;
`;
