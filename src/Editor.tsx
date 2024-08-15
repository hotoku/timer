import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Panel from "./Panel";
import {
  deleteSchedule,
  loadSchedules,
  saveSchedule,
  Schedule,
} from "./Storage";

type Tone = "high" | "low";

function Editor(): React.ReactElement {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [tones, setTones] = useState<Tone[]>([]);
  const [name, setName] = useState("");
  const [intervals, setIntervals] = useState<number[]>([]);
  useEffect(() => {
    const ss = loadSchedules();
    setSchedules(ss);
    if (ss.length > 0) {
      setName(ss[0].name);
      setIntervals(ss[0].intervals);
      setTones(ss[0].tones.map((x) => (x === 440 ? "high" : "low")));
    }
  }, []);
  console.log("tones=", tones);
  const handleClickNew = () => {
    setName("");
    setIntervals([]);
  };
  const handleClickAdd = () => {
    setIntervals([...intervals, 1]);
    setTones([...tones, "high"]);
  };
  const handleClickDel = (i: number) => {
    setIntervals(intervals.filter((_, j) => j !== i));
    setTones(tones.filter((_, j) => j !== i));
  };
  const handleIntervalChange = (i: number, v: number) => {
    setIntervals(intervals.map((x, j) => (i === j ? v : x)));
  };
  const handleClickSave = () => {
    saveSchedule({
      name,
      intervals,
      tones: tones.map((t) => (t === "high" ? 440 : 220)),
    });
    const ss = loadSchedules();
    setSchedules(ss);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    const schedule = schedules.find((s) => s.name === name);
    if (schedule) {
      setName(schedule.name);
      setIntervals(schedule.intervals);
    }
  };
  const handleClickDelete = () => {
    if (name === "") return;
    deleteSchedule(name);
    const ss = loadSchedules();
    setSchedules(ss);
  };
  const handleToneChange = (i: number, value: Tone) => () => {
    setTones(tones.map((tone, j) => (j === i ? value : tone)));
  };
  const nomatch = "__no_match__";
  const selected = (
    schedules.find((s) => s.name === name) ?? {
      name: nomatch,
      intervals: [],
    }
  ).name;
  const toneValues = [
    { name: "high" as Tone, freq: 440 },
    { name: "low" as Tone, freq: 220 },
  ];
  return (
    <>
      <Panel>
        <Selector value={selected} onChange={handleSelectChange}>
          {schedules.map((s, i) => {
            return (
              <option key={i} value={s.name}>
                {s.name}
              </option>
            );
          })}
          <option value={nomatch}></option>
        </Selector>
        <Button onClick={handleClickNew}>new</Button>
      </Panel>
      <Panel>
        <NameInput
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {intervals.map((v, i) => {
          return (
            <IntervalLine key={i}>
              <IntervalInput
                value={v}
                type="number"
                min={1}
                onChange={(e) =>
                  handleIntervalChange(i, parseFloat(e.target.value))
                }
              ></IntervalInput>
              <ToneSelector>
                {toneValues.map((tone, j) => {
                  return (
                    <ToneOption
                      key={j}
                      onClick={handleToneChange(i, tone.name)}
                    >
                      <ToneInput
                        id={`tone-${i}-${j}`}
                        value={tone.name}
                        type="radio"
                        checked={tones[i] === tone.name}
                        readOnly
                      />
                      <ToneLabel htmlFor={`#tone-${i}-${j}`}>
                        {tone.name}
                      </ToneLabel>
                    </ToneOption>
                  );
                })}
              </ToneSelector>
              <DelButton onClick={() => handleClickDel(i)}>-</DelButton>
            </IntervalLine>
          );
        })}
        <AddButton onClick={handleClickAdd}>+</AddButton>
        <div>
          <SaveButton
            disabled={name === "" || intervals.length === 0}
            onClick={handleClickSave}
          >
            save
          </SaveButton>
          <DeleteButton onClick={handleClickDelete}>delete</DeleteButton>
        </div>
      </Panel>
    </>
  );
}

export default Editor;

const Selector = styled.select`
  display: inline-block;
  font-size: 1.5rem;
  width: 10rem;
  height: 3rem;
`;

const Button = styled.button`
  display: inline-block;
  height: 3rem;
  font-size: 1.5rem;
  margin-left: var(--basic-gap);
  background-color: var(--primary-color);
  color: var(--light-text-color);
  padding: var(--small-gap) calc(var(--basic-gap) * 2);
  border-radius: var(--basic-radius);
`;

const NameInput = styled.input`
  display: block;
  height: 2rem;
  background-color: var(--bg-color);
  border-radius: var(--basic-radius);
  font-size: 1.5rem;
  vertical-align: top;
  padding: 0 var(--small-gap);
  width: 100%;
`;

const AddButton = styled(Button)`
  display: inline-block;
  height: 2rem;
  width: 1.8rem;
  font-size: 2rem;
  padding: 0 var(--small-gap);
  margin: var(--small-gap) 0;
`;

const IntervalLine = styled.div`
  margin: var(--small-gap) 0;
  line-height: 2rem;
`;

const IntervalInput = styled.input`
  display: inline-block;
  background-color: var(--bg-color);
  border-radius: var(--basic-radius);
  padding-left: var(--small-gap);
  height: 2rem;
  width: 4rem;
`;

const DelButton = styled(Button)`
  display: inline-block;
  background-color: var(--primary-color);
  border-radius: var(--basic-radius);
  color: var(--light-text-color);
  height: 2rem;
  width: 1.8rem;
  padding: 0 var(--small-gap);
  margin: 0 var(--small-gap);
`;

const SaveButton = styled(Button)<{ disabled?: boolean }>`
  display: inline-block;
  ${({ disabled }) => `opacity: ${disabled ? 0.5 : 1};`};
`;

const DeleteButton = styled(SaveButton)``;

const ToneSelector = styled.div`
  display: inline-block;
  margin-left: var(--small-gap);
  span:nth-of-type(2) {
    margin-left: var(--small-gap);
  }
`;

const ToneInput = styled.input``;
const ToneOption = styled.span``;
const ToneLabel = styled.label`
  margin-left: calc(var(--small-gap) / 3);
`;
