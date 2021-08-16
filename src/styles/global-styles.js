import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }
  
  h1 {
    font-family: ${({ theme }) => theme.font.family.secondary};
  }
`;
