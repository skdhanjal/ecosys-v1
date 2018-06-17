
export default (filterItems=[], action) => {
  const {value} = action;

  if(value) {
    return filterItems.filter(item => item.label.includes(value));
  } else {
    return filterItems;
  }
}
