import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/Home';
import { SwitchContext } from './context/SwitchContext';

export const App = () => {
  const { theme } = useContext(SwitchContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route to="*" component={Home} />
          </Switch>
        </BrowserRouter>
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
};
