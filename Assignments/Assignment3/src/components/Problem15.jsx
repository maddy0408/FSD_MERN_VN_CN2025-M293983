import React, { useState } from 'react'

const Problem15 = () => {
    
    const [profile,setProfile]=useState({
        name:"",
        email:"",
        phone:""
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    }
  return (
    <div style={{marginTop:"250px"}}>
      <h2>Updating Profile</h2>
      <input type="text"placeholder='Enter name'value={profile.name}name="name"onChange={handleChange}style={styles.bar}/><br/><br/>
      <input type="email"placeholder='Enter email'value={profile.email}name="email"onChange={handleChange}style={styles.bar}/><br/><br/>
      <input type="tel"placeholder='Enter phone'value={profile.phone}name="phone"onChange={handleChange}style={styles.bar}/><br/>

      <h3>Display Profile Info</h3>
      <p><b>Name:</b> {profile.name}</p>
      <p><b>Email:</b> {profile.email}</p>
      <p><b>Phone:</b> {profile.phone}</p>

    </div>
  );
};

const styles={
    bar:{
      width:200,
      padding: '10px 14px',
      borderRadius:10,
      border: '1px solid #ccc',
      fontSize: 16,
      outline:'none'
    }
}
export default Problem15;
