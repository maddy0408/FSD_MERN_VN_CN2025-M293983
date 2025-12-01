import React, { useState } from 'react'
const Problem13 = () => {
    const [fruits,setFruits]=useState(["Apple","Banana","Mango","Pineapple"]);
    const [addfruit,setAddfruit]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(addfruit.trim()==="")
            return;
        setFruits([...fruits,addfruit]);
        setAddfruit("");
    };

    const deleteFruit=(index)=>{
        const updatedList = fruits.filter((_,i)=>i!== index);
        setFruits(updatedList);
    }
    const handleChange=(e)=>{
        setAddfruit(e.target.value);
    }
  return (
    <div style={{marginTop:"300px"}}>
      <h1>Fruits Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the fruit name'value={addfruit}onChange={handleChange}
      style={{width:200,
      padding: '10px 14px',
      borderRadius:10,
      border: '1px solid #ccc',
      fontSize: 16,
      outline:'none'}}/>
    <button type='submit'>ADD +</button>
      </form>

      <ul>
        {fruits.map((variable,index)=>(
            <li key={index}>{variable}
            <button onClick={()=>deleteFruit(index)}
                style={{padding:"10px",marginLeft:"15px",width:"80px"}}>Remove </button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Problem13;
