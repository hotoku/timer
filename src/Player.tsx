import React from "react";

import Controller from "./Controller";
import ScheduleList from "./ScheduleList";
import ScheduleViewer from "./ScheduleViewer";

function Player(): React.ReactElement {
  return (
    <>
      <Controller />
      <ScheduleList />
      <ScheduleViewer />
    </>
  );
}

export default Player;
