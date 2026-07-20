import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    transition: background 0.2s ease, color 0.2s ease;
  }

  #root {
    min-height: 100vh;
  }

  *:focus-visible {
    outline: 2px solid rgba(124, 140, 255, 0.75);
    outline-offset: 3px;
  }
`;
