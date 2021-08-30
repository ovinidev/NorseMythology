import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';
import Home from './templates/Home';

import { usePersistedState } from './utils/usePersistedState';
import { Switcher } from './components/Switcher';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Switcher toggleTheme={toggleTheme} />
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
}

export default App;
