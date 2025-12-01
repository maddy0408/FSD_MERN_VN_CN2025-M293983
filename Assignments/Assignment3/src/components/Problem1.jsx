import React from 'react'

const Problem1 = () => {
const students=[
    {name:"ABC",dept:"IT",year:3},
    {name:"DEF",dept:"CSE",year:2},
    {name:"GHI",dept:"EEE",year:1},
    {name:"JKL",dept:"ECE",year:4},
    {name:"MNO",dept:"FT",year:2},
    {name:"PQR",dept:"MECH",year:3},
  ];
  return (
    <div style={styles.outer}>
        {students.map((student)=>(
          <div style={styles.card}>
            <h3>{student.name}</h3>
            <h4>Department: {student.dept}</h4>
            <h4>Year: {student.year}</h4>
          </div>
        ))}
    </div>
  )
}

const styles={
  outer :{
  display: "flex",
  justifyContent: "center", 
  gap: "50px",
  margin: "40px",
  textAlign: "center",
  marginTop:"300px"
},

  card: {
    width: "200px",
    background: "#ffffff",
    borderRadius: "15px",
  }
}
export default Problem1;
