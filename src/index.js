// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components
import { App } from 'components/App';

// Style
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/front-end-school-2.0-case-task">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
