/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from '@/common/Store';

let rootDiv = document.getElementById('root');

if (!rootDiv) {
  rootDiv = document.createElement('div');
  rootDiv.setAttribute('id', 'root');
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDiv,
);
