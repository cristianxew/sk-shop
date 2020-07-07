import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Lobster", cursive;
    padding: 0;
    height: 100%;
    background: #f4f6ff;
    
    @media screen and (max-width: 800px) {
        padding-top: 14px;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }

  hr {
    width: 100%;
    height: 12px;
    border: 0;
    box-shadow: inset 0 12px 12px -12px RGBA(18,118,129,0.5);
  }

  * {
    box-sizing: border-box;
  }
`;
