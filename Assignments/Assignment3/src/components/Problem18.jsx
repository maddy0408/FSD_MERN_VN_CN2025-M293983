import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
const Problem18 = () => {

    const [users,setUsers]=useState([]);
    const [page,setPage]=useState(0);

    useEffect(()=>{
        axios.get("https://dummyjson.com/users?limit=20")
        .then(res=>{
            setUsers(res.data.users);
        })
        .catch(err=>console.log(err));
    },[]);

    const userperPage=5;
    const start=page*userperPage;
    const visibleUsers=users.slice(start,start+userperPage);

    const handleNext=()=>{
        if((page+1)*userperPage<users.length){
            setPage(page+1);
        }
    };

    const handlePrev=()=>{
        if(page>0){
            setPage(page-1);
        }
    };
    
    return (
    <div>
      {visibleUsers.map((item)=>(
        <div style={{
      border: "2px solid black",
      borderRadius: "6px",
      margin: "10px 0",
      padding: "10px"
    }}>
            <p>{item.firstName} {item.lastName}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
        </div>
      ))}

      <button onClick={handlePrev} disabled={page === 0}style={{marginRight:"20px"}}>Previous</button>
      
      <button onClick={handleNext} disabled={(page + 1) *userperPage >= users.length}>Next</button>
    </div>
  );
};


export default Problem18;
