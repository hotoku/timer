import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Panel from "./Panel";
import { loadSchedules, Schedule } from "./Storage";

function Editor(): React.ReactElement {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [name, setName] = useState("");
  const [intervals, setIntervals] = useState<number[]>([]);
  useEffect(() => {
    const ss = loadSchedules();
    setSchedules(ss);
  }, []);
  const handleClickNew = () => {
    setName("");
  };
  const handleClickAdd = () => {
    setIntervals([...intervals, 1]);
  };
  return (
    <>
      <Panel>
        <Selector>
          {schedules.map((s, i) => {
            return <option key={i}>{s.name}</option>;
          })}
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
        <AddButton onClick={handleClickAdd}>+</AddButton>
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
  font-size: 2rem;
  vartical-align: middle;
  padding: 0 var(--small-gap);
  margin: var(--small-gap) 0;
`;
