import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { MenuLink } from './components/MenuLink';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <MenuLink />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
