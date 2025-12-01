import React from 'react'

const Child = ({showAlert}) => {
  return (
    <div>
      <button onClick={showAlert}>Click here!</button>
    </div>
  )
}

export default Child;
