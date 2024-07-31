import React from "react";

import "./App.css";
import Controller from "./Controller";
import Scheduler from "./Scheduler";

function App(): React.ReactElement {
  return (
    <div className="app">
      <Controller />
      <Scheduler />
    </div>
  );
}

export default App;
