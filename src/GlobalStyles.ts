import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --text-color: #333;
    --bg-color: #eee;
 }

 :root {
    --font-family: "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    --basic-gap: 5px;
    --small-gap: 3px;
    --basic-radius: 3px;    
}

a:link,
a:visited,
a:hover,
a:active {
  color: #7c5119;
  text-decoration: none;
}
`;

export default GlobalStyles;
