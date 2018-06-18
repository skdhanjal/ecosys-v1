import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Input from './Input';
import List from './List';

import '../../styles/filterSearch.scss';

export default ({header, input, options, actions}) => {
  console.log('Rendering filter search:')
  return (
    <div className="filter-search">
      <Header label={header}/>
      <Input value={input} {...actions}/>
      <List items={options} {...actions}/>
    </div>
  )
}
