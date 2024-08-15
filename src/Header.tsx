import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(): React.ReactElement {
  return (
    <MyHeader>
      <nav style={{ display: "inline-block" }}>
        <ul>
          <li>
            <MyLink to="/">player</MyLink>
          </li>
          <li>
            <MyLink to="/edit">editor</MyLink>
          </li>
        </ul>
      </nav>
    </MyHeader>
  );
}

export default Header;

const MyLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
`;

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
  width: 100%;
  .clear-button {
    text-align: right;
  }
`;
