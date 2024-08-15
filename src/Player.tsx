import React from "react";

import Controller from "./Controller";
import ScheduleList from "./ScheduleList";
import ScheduleViewer from "./ScheduleViewer";
import { ringBell } from "./utils";

function Player(): React.ReactElement {
  return (
    <>
      <Controller />
      <ScheduleList />
      <ScheduleViewer />
      <div>
        <button
          onClick={() => {
            ringBell();
          }}
        >
          test
        </button>
      </div>
    </>
  );
}

export default Player;
