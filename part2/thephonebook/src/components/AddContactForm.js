//jshint esversion:6

import React from 'react';

const AddContactForm = ({newName, nameChangeFunc, newNumber, numberChangeFunc, submitFunc}) => {
  return (
    <form>
        <div>
          name: <input value={newName} onChange={nameChangeFunc}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChangeFunc}/>
        </div>
        <div>
          <button type="submit" onClick={submitFunc}>add</button>
        </div>
      </form>
    )
} 

export default AddContactForm
