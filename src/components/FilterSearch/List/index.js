import React from 'react';

export default ({items=[]}) => (
    <ul className="list">
      {items.map((item, index) => <li key={index} className="list-item">{item.label}</li>)}
    </ul>
);
