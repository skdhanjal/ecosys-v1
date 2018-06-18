
const actions = {
  filterInput: (state ={}, action) => {
    const {value} = action;
    return typeof value === "undefined" ? state : {...state, input:value};
  }
}

export default (state = {}, action) => {
  return actions[action.type] ? actions[action.type](state, action) : state;
}
