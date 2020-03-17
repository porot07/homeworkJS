import './css/style.css'; // Подключает стили.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createSelector } from 'reselect';
import App from './App.jsx';
import * as actionCreators from './actions/actions';
import createStore from './createStore';

const store = createStore(0);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
