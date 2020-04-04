// jshint esversion:6

import React from 'react';

const Notification = ({errorMessage}) => {

  if (errorMessage.message === null) {
    return null
  }

  if (errorMessage.category === "success") {
    return (
      <div className="success">
        {errorMessage.message}
      </div>  
    )
  }

  return (
    <div className="error">
      {errorMessage.message}
    </div>
  )
  
}

export default Notification