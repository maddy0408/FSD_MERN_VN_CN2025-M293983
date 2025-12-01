import React from "react";

const Problem6 = () => {
  const products = [
    { id: 1, name: "ABC", price: 25000 },
    { id: 2, name: "DEF", price: 5000 },
    { id: 3, name: "GHI", price: 2000 },
    { id: 4, name: "JKL", price: 20000 },
    { id: 5, name: "MNO", price: 21000 },
  ];
  return (
    <div style={{marginTop:"250px"}}>
      <h2>Product List</h2>
      <table border="2" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
            {products.map((value)=>(
            <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.price}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Problem6;
