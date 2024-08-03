import { useAtomValue } from "jotai";
import React from "react";
import { bellAtom } from "./atoms";
import { styled } from "styled-components";

function ScheduleViewer(): React.ReactElement {
  const bell = useAtomValue(bellAtom);

  return (
    <>
      <List>
        {bell.intervals.map((s, i) => {
          return <li key={i}>{s}</li>;
        })}
      </List>
    </>
  );
}

export default ScheduleViewer;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
