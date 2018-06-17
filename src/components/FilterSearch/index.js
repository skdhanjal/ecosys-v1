import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Input from './Input';
import List from './List';

import '../../styles/filterSearch.scss';

class FilterSearch extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {input, fItems, ...actions} = this.props;

    return(
      <div className="filter-search">
        <Header label="Available Services"/>
        <Input value={input} {...actions}/>
        <List items={fItems}/>
      </div>
    )
  }
}

const mapDispathToProps = (dispatch) => ({
  filterItems: value => dispatch({type: 'filterItems', value}),
  filterInput: value => dispatch({type: 'filterInput', value})
})

const mapStateToProps = ({page: {filterSearch}}) => {
  return {
    input: filterSearch.input,
    fItems: filterSearch.fItems
  }
}

export default connect(mapStateToProps, mapDispathToProps)(FilterSearch)
