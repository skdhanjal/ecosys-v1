import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import getStore from './store';
import App from './components/app';

import './styles/index.scss';

const root = document.getElementById('root');
const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root);
