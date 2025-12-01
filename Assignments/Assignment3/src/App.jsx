import React from 'react'
// import Problem1 from './components/Problem1';
// import Problem2 from './components/Problem2';
// import ProfileCard from './components/ProfileCard';
// import Problem4 from './components/Problem4';
// import Problem5 from './components/Problem5';
// import Problem6 from './components/Problem6';
// import Parent from './components/Parent';
// import Problem8 from './components/Problem8';
// import Problem9 from './components/Problem9';
// import Problem10 from './components/Problem10';
// import Problem11 from './components/Problem11';
// import Problem12 from './components/Problem12';
// import Problem13 from './components/Problem13';
// import Problem15 from './components/Problem15';
// import Problem16 from './components/Problem16';
// import Problem17 from './components/Problem17';
// import Problem18 from './components/Problem18';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
const App = () => {

  return (
    <>
     <Router>
      <nav style={styles.navbar}>
        <div style={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
      </nav>

      <div id="content" style={styles.content}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/*" element={<Products/>}>
            <Route path="electronics" element={<Electronics/>}/>
            <Route path="fashion" element={<Fashion/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
    <div>
      {/* <Problem1 /> */}
      {/* <Problem2 /> */}
      {/* <ProfileCard name="Monkey D Luffy" role="Captain" image="https://wallpapers.com/images/hd/monkey-d-luffy-smile-under-the-sky-ac0hmws4hyl6akbj.jpg"/> */}
      {/* <ProfileCard name="Vinsmoke Sanji" role="Cook" image="https://i.pinimg.com/736x/08/41/ea/0841ea1975884bd483353ee4a7b17ae6.jpg"/> */}
      {/* <ProfileCard name="Roronoa Zoro" role="Swordsman" image="https://wallpapercave.com/wp/wp8986770.jpg"/> */}
      {/* <Problem4/> */}
      {/* <Problem5/> */}
      {/* <Problem6/> */}
      {/* <Parent/> */}
      {/* <Problem8/> */}
      {/* <Problem9/> */}
      {/* <Problem10/> */}
      {/* <Problem11/> */}
      {/* <Problem12/> */}
      {/* <Problem13/> */}
      {/* <Problem15/> */}
      {/* <Problem16/> */}
      {/* <Problem17/> */}
      {/* <Problem18/> */}
    </div>
    </>
  );
}

const styles={
  navbar:{
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#1B1B1B",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 25px"
  },
  links:{
    display: "flex",
    gap: "25px",
    marginLeft:"20px",
    fontSize:"20px"
  },
   content: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "90px",       // prevents content from hiding behind navbar
    display: "flex",
    flexDirection: "column",
    alignItems: "center",     // centers everything
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}
export default App;

