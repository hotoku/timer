import React from "react";

import { styled } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "./Player";
import Editor from "./Editor";
import Header from "./Header";
import { ErrorBoundary } from "react-error-boundary";
import DisplayError from "./DisplayError";

function App(): React.ReactElement {
  return (
    <Base>
      <BrowserRouter basename="/timer">
        <Header />

        <Main>
          <ErrorBoundary fallback={<DisplayError />}>
            <Routes>
              <Route path="/" element={<Player />} />
              <Route path="/edit" element={<Editor />} />
            </Routes>
          </ErrorBoundary>
        </Main>
      </BrowserRouter>
    </Base>
  );
}

export default App;

const Base = styled.div`
  font-family: var(--font-family);
  color: var(--text-color);
`;
const Main = styled.div`
  width: 30rem;
  margin: var(--basic-gap) auto;
`;
