import React from 'react'
import Child from './Child';
const Parent = () => {

  const showAlert=()=>{
    alert("This is a Parent Component");
  };
  return (
    <div style={{marginTop:"300px"}}>
      <h1>Parent Component</h1>
      <Child showAlert={showAlert}/>
    </div>
  )
}

export default Parent;

