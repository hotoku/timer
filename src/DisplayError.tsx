import React from "react";
import { showAll } from "./Storage";
import { styled } from "styled-components";

function DisplayError(): React.ReactElement {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <pre>{showAll()}</pre>
      <ClearButton onClick={handleClear}>clear</ClearButton>
    </div>
  );
}

export default DisplayError;

const ClearButton = styled.button`
  background-color: var(--primary-color);
  color: var(--light-text-color);
  padding: var(--small-gap) calc(var(--basic-gap) * 2);
  margin: var(--basic-gap) 0;
`;
