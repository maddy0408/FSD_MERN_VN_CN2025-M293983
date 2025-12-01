import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
const Problem12 = () => {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res=>{
            setProducts(res.data.products);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            setError(true);
            setLoading(false);
        });
    },[]);

    if(loading)
        return <h2>Loading...</h2>
    if(error)
        return <h2>Error loading data</h2>
  return (
    <div>
      <h2>Product Fetching</h2>
      {products.map((item)=>(
        <div>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>{item.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default Problem12;
