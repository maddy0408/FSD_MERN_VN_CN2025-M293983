import React, { useState } from 'react'

const Problem5 = () => {
    const [name,setName]=useState("");
    const [mail,setMail]=useState("");

    const [submitname,setSubmitname]=useState("");
    const [submitmail,setSubmitmail]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitname(name);
        setSubmitmail(mail);
    };
  return (
    <div style={{marginTop:"300px"}}>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}
      style={{width:200,
      padding: '10px 14px',
      borderRadius:10,
      border: '1px solid #ccc',
      fontSize: 16,
      outline:'none',
      marginBottom :'10px',}}/><br/>
      <input type="email" placeholder='Enter your mail' onChange={(e)=>setMail(e.target.value)}
      style={{width:200,
      padding: '10px 14px',
      borderRadius:10,
      border: '1px solid #ccc',
      fontSize: 16,
      outline:'none',
      marginBottom :'10px',}}/><br/>

      <button type="submit" style={{backgroundColor:"blue",marginLeft:"70px"}}>Submit</button>
      </form>

      <h2>
        <p>Name: {submitname}</p>
        <p>Email-id: {submitmail}</p>
      </h2>
    </div>
  )
}

export default Problem5;
