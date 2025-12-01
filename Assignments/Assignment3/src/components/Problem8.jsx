import React from 'react'
import { useState } from 'react';
const Problem8 = () => {
    const products=[
        {name: "Laptop",category: "Electronics"},
        {name: "TShirt",category: "Clothes"},
        {name: "Mobilephone",category: "Electronics"},
        {name: "Water Heater",category: "Electronics"},
        {name: "Towel",category: "Clothes"},
        {name: "Saree",category: "Clothes"},
    ];
    
    const [filteritem,setFilteritem]=useState("All");

    const filtering = filteritem === "All"
    ? products 
    : products.filter((item)=>item.category === filteritem);

  return (
    <div style={{marginTop:"300px"}}>
      <h2>Product Filtering</h2>

      <button onClick={()=>setFilteritem("All")} style={{marginLeft:"10px"}}>All</button>
      <button onClick={()=>setFilteritem("Clothes")} style={{marginLeft:"10px"}}>Clothes</button>
      <button onClick={()=>setFilteritem("Electronics")} style={{marginLeft:"10px"}}>Electronics</button>

      <h2>Products:</h2>
      <ul>
        {filtering.map((item)=>(
            <li>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  )
}

export default Problem8;
