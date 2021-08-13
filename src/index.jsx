import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Description } from './components/Description';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Goals } from './components/Goals';
import { Header } from './components/Header';
import { Hobby } from './components/Hobby';
import { Programmer } from './components/Programmer';
import { Skils } from './components/Skils';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <Programmer />
        <Description />
        <Skils />
        <Gallery />
        <Goals />
        <Hobby />
        <Footer />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
