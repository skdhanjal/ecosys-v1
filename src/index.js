import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import App from './components/app';

const defaultState = {
  page: {
    filterSearch: {
      input: '',
      oItems:[{label:'Aws Service'}, {label:'Apache Service'}, {label:'Microsoft Online'}, {label: 'Google API'}],
      fItems: [{label:'Aws Service'}, {label:'Apache Service'}, {label:'Microsoft Online'}, {label: 'Google API'}]
    }
  }
};

const store = createStore(rootReducer, defaultState);

import './styles/index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root);
