import React, { useEffect } from "react";
import { showAll } from "./Storage";

function DisplayError(): React.ReactElement {
  useEffect(() => {}, []);

  return (
    <div>
      <pre>{showAll()}</pre>
    </div>
  );
}
export default DisplayError;
