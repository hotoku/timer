import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(): React.ReactElement {
  return (
    <MyHeader>
      <nav>
        <ul>
          <li>
            <Link to="/">player</Link>
          </li>
          <li>
            <Link to="/edit">edit</Link>
          </li>
        </ul>
      </nav>
    </MyHeader>
  );
}

export default Header;

const MyHeader = styled.header`
  background-color: var(--header-bg-color);
  padding: calc(2 * var(--basic-gap));
  a,
  a:link,
  a:visited {
    color: var(--light-text-color);
    font-weight: bold;
    font-size: 1.5rem;
  }
  li {
    display: inline-block;
    border: var(--border-width) solid var(--light-text-color);
    padding: var(--small-gap);
    width: 10rem;
  }
  li + li {
    margin-left: var(--basic-gap);
  }
`;
