import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
const Problem11 = () => {

    const [variable,setVariable]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res=>{
            console.log(res.data.products);
            setVariable(res.data.products);
        })
    },[]);
  return (
    <div style={styles.container}>
      {variable.map((item)=>(
        <div style={styles.card}>
            <p><b>{item.title}</b></p>
            <p>{item.price}</p>
            <p>{item.brand}</p>
        </div>
      ))}
    </div>
  );
};

const styles={
    container:{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        marginTop: "50px"
    },
    card:{
        width: "180px",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "white",
        textAlign: "center",
    }
}

export default Problem11;
