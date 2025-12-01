import React from 'react'

const ProfileCard = ({name,role,image}) => {
  return (
    <div style={styles.outer1}>
      <div style={{
        width: "220px",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        background: "#fff",
      }}>
        <img src={image}style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
        }}/>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  )
}

const styles={
  outer1:{
    display:"inline-block",
    padding:"30px",
    marginTop:"250px"
  }
}

export default ProfileCard;
