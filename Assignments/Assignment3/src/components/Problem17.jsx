import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Problem16 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/users/1")
      .then((res) => {
        setUser({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleUpdate = () => {
    axios.put("https://dummyjson.com/users/1", user)
      .then((res) => {
        console.log(res.data);
        setMsg("Profile Updated Successfully!!!");
      })
      .catch((err) => {
        console.log(err);
        setMsg("Update Failed!!!");
      });
  };

  return (
    <div style={{marginTop:"300px"}}>
      <h2>Editing User Profile</h2>

      <input type="text" placeholder="Enter first name" name="firstName"
        value={user.firstName} onChange={handleChange} style={styles.bar}/><br /><br />

      <input type="text" placeholder="Enter last name" name="lastName"
        value={user.lastName} onChange={handleChange} style={styles.bar}/><br /><br />

      <input type="email" placeholder="Enter your email" name="email"
        value={user.email} onChange={handleChange} style={styles.bar}/><br /><br />

      <button onClick={handleUpdate}>Update</button>

      {msg && <h4>{msg}</h4>}
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
export default Problem16;
