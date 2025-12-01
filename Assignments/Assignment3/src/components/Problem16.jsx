import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Problem16 = () => {

    const [post,setPost]=useState({
        title:"",
        body:""
    });

    const [msg,setMsg]=useState("");

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setPost({
            ...post,
            [name]:value
        });
    };

    const handleSubmit=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",post)
        .then(res=>{
            console.log(res.data);
            setMsg("Post Added!");
        })
        .catch((err)=>{console.log(err);
        setMsg("Error");
        });
    };
  return (
    <div style={{marginTop:"300px"}}>
      <h2>Post Method</h2>
      <input type="text"placeholder='Enter title'name="title"value={post.title}onChange={handleChange} style={styles.bar1}/><br/><br/>
      <textarea type="text"placeholder='Enter body'name="body"value={post.body}onChange={handleChange} style={styles.bar1}></textarea><br/><br/>

      <button onClick={handleSubmit}>Submit</button>

      {msg && <h3>{msg}</h3>}
    </div>
  );
};

const styles={
    bar1:{
      width:200,
      padding: '10px 14px',
      borderRadius:10,
      border: '1px solid #ccc',
      fontSize: 16,
      outline:'none'
    }
}


export default Problem16;
