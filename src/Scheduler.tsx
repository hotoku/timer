import { useAtom } from "jotai";
import React from "react";
import { styled } from "styled-components";
import { bellAtom } from "./atoms";

function Scheduler(): React.ReactElement {
  const [bell, setBell] = useAtom(bellAtom);

  const handleDelete = () => {};

  return (
    <Panel>
      {bell.schedule.map((s, i) => {
        return (
          <ScheduleLine key={i} $isFirst={i === 0}>
            <ScheduleValue>{s}</ScheduleValue>
            <ScheduleButton onClick={handleDelete}>-</ScheduleButton>
          </ScheduleLine>
        );
      })}
      <ScheduleLine $isFirst={false}>
        <ScheduleInput type="number" min={1} />
        <ScheduleButton onClick={handleDelete}>+</ScheduleButton>
      </ScheduleLine>
    </Panel>
  );
}

export default Scheduler;

const Panel = styled.div`
  padding: 3px;
  background-color: #ddd;
  margin-bottom: 5px;
  border-radius: 3px;
`;

const ScheduleLine = styled.div<{ $isFirst: boolean }>`
  ${(props) => (props.$isFirst ? "margin-bottom: 5px;" : "")}
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
