//jshint esversion:6

import React from 'react';

const Filter = ({initialValue, onChangeFunc}) => {
  return (
    <div>
      name with input
      <input value={initialValue} onChange={onChangeFunc}/>
    </div>
    )
} 

export default Filter
