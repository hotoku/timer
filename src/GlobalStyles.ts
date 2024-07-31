import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --text-color: #0d0d0d;
    --light-text-color: #f0f0f0;
    --bg-color: #d9d9d9;
    --primary-color: #01238E;
    --secondary-color: #42AB84;
    --alert-color: #E31E27;
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
