import React from 'react'
import products from '../assets/data.json'
const Problem10 = () => {
  return (
    <div style={{marginTop:"300px"}}>
      <h2>List of Products</h2>
      <div style={styles.container}>
        {products.map((item)=>(
            <div style={styles.productcard}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
        </div>
        ))}
        
      </div>
    </div>
  );
};

const styles={
    container:{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        marginTop: "10px"
    },
    productcard:{
        width: "180px",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "white",
        textAlign: "center",
    }
};

export default Problem10;
