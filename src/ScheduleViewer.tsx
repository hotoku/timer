import { useAtomValue } from "jotai";
import React from "react";
import { bellAtom } from "./atoms";
import { styled } from "styled-components";

function ScheduleViewer(): React.ReactElement {
  const bell = useAtomValue(bellAtom);
  const n = bell.intervals.length;

  return (
    <>
      <List>
        {Array.from({ length: n }, (_, i) => i).map((i) => {
          return (
            <li key={i}>
              {bell.intervals[i]} {bell.tones[i]}
            </li>
          );
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
