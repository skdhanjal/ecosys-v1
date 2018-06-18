import React, {Component} from 'react';
import {connect} from 'react-redux';

import FilterSearch from '../../components/FilterSearch'

const FilterSearchContainer = ({filterSearch, actions}) => {
  const {input, options =[], ...rest} = filterSearch;
  const fOptions = options.filter(item => item.label.toLowerCase().includes(input.toLowerCase()));

  return (
    <FilterSearch input={input} options={fOptions} actions={actions} {...rest}/>
  )
}

const mapDispathToProps = (dispatch) => ({
  actions: {
    filterItems: value => dispatch({type: 'filterItems', value}),
    filterInput: value => dispatch({type: 'filterInput', value})
  }
})

const mapStateToProps = ({filterSearch}) => {
  return {
    filterSearch
  }
}

export default connect(mapStateToProps, mapDispathToProps)(FilterSearchContainer)
