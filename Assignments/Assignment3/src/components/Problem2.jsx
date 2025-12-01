import React from 'react'

const Problem2 = () => {
    const isLoggedIn = false;
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"300px"}}>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in</h2>}
    </div>
  )
}

export default Problem2;
