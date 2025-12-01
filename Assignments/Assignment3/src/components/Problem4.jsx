import React from 'react'
import { useState } from 'react'
const Problem4 = () => {
const [name,setName]=useState();
const handleChange=(e)=>{
    setName(e.target.value);
}
  return (
    <div style={{marginTop:"350px"}}>
      <input type="text" placeholder="Enter your username" onChange={handleChange} 
      style={{width:200,
      padding: '10px 14px',
      borderRadius:10,
      border: '1px solid #ccc',
      fontSize: 16,
      outline:'none'}}/>
      <h2>{name}</h2>
    </div>
  )
}

export default Problem4;
