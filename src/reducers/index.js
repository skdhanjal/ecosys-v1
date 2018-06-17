import {combineReducers } from 'redux';

const filterInput =(state ='test', action) => {
  const {value} = action;
  return typeof value === "undefined" ? state : value;
};


const filterItems = (filterItems=[], action) => {
  const {value} = action;

  if(value) {
    return filterItems.filter(item => item.label.toLowerCase().includes(value.toLowerCase()));
  } else {
    return filterItems;
  }
}

const page = (state = {}, action) => {
  let newState = {...state};

  switch (action.type) {
    case 'filterInput':
      newState = {
        ...state,
        filterSearch: {
          ...state.filterSearch,
          input: filterInput(state.filterSearch.input, action),
          fItems: filterItems(state.filterSearch.oItems, action)
        }
      }
      break;
    case 'filterItems':
      newState = {
        ...state,
        filterSearch: {
          ...state.filterSearch,
          fItems: filterItems(state.filterSearch.oItems, action)
        }
      }
      break;
    default:
      return state
  }
  return newState;
}

export default combineReducers({
  page
})
