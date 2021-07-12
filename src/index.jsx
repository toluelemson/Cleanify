import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import makeServer from './server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
