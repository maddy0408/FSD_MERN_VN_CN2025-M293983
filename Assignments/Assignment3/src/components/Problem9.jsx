import React, { useState } from 'react';

const Problem9 = () => {
  const students = ["Arun", "Bala", "Chandru", "Divya", "Elango", "Farhana", "Gokul","Harish","Indumati","Jayaprakash","Kannan"];
  const [search, setSearch] = useState("");

  const filtered = students.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{marginTop:"300px"}}>
      <h2>Search Box</h2>
      <input
        type="text"
        placeholder="Enter the student name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{width:200,
        padding: '10px 14px',
        borderRadius:10,
        border: '1px solid #ccc',
        fontSize: 16,
        outline:'none'}}
      />

      <ul>
        {filtered.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default Problem9;
