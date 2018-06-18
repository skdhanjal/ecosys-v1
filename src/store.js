import {createStore} from 'redux';
import reducers from './reducers';

const defaultState = {
  filterSearch: {
    header:'List of Availble Services',
    input: '',
    options:[{label:'Aws Service'}, {label:'Apache Service'}, {label:'Microsoft Online'}, {label: 'Google API'}]
  }
};

export default () => {
  const store = createStore(reducers, defaultState);

  return store;
}
