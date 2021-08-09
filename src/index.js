import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {ThemeProvider} from 'styled-components';
import { defaultTheme } from './thems/default';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
