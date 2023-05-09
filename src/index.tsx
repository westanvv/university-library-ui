import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/components/App';
import Routes from 'src/Routes';

import 'src/styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <App>
    <Routes />
  </App>
);
