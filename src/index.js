/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import TransitionProvider from './components/TransitionProvider';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <TransitionProvider>
      <App />
    </TransitionProvider>
  </BrowserRouter>,
  document.getElementById('app'),
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
