import React from 'react';

export default ({value, filterInput}) => {

  const onChange = (e) => {
    filterInput(e.target.value)
  }

  return (
    <div className="input-container">
        <input type="text" value={value} onChange={onChange}/>
    </div>
  )
}
