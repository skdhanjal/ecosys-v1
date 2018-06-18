import React, {Component} from 'react';
import {connect} from 'react-redux';

import FilterSearch from '../../components/FilterSearch'

const FilterSearchContainer = ({filterSearch, actions}) => {
  return (
    <FilterSearch {...filterSearch} actions={actions}/>
  )
}

const mapDispathToProps = (dispatch) => ({
  actions: {
    filterItems: value => dispatch({type: 'filterItems', value}),
    filterInput: value => dispatch({type: 'filterInput', value})
  }
})

const mapStateToProps = ({page: {filterSearch}}) => {
  return {
    filterSearch
  }
}

export default connect(mapStateToProps, mapDispathToProps)(FilterSearchContainer)
