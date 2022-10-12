import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf56',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
    colorCards: '#ec9787',
    ultraViolet: '#6b5b95',
    backgCard: '#bc70a4',
  },
};
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
