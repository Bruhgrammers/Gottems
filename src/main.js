require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import render, {
  setupReducers,
  replaceReducers,
} from '@sketchpixy/rubix/lib/node/redux-router';

import reducers from './redux/reducers';

setupReducers(reducers);
render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    // reload App again
    require('./App').default;
    render(App);
  });

  module.hot.accept('./redux/reducers', () => {
    // reload reducers again
    let newReducers = require('./redux/reducers');
    replaceReducers(newReducers);
  });
}
