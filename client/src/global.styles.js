import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Lobster Two", cursive;
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
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, rgba(18, 118, 129, 0.1), rgba(18, 118, 129, 1), rgba(18, 118, 129, 0.1));
  }


  * {
    box-sizing: border-box;
  }
`;
