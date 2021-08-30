import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { SwitchContextProvider } from './context/SwitchContext';

ReactDOM.render(
  <React.StrictMode>
    <SwitchContextProvider>
      <App />
    </SwitchContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
