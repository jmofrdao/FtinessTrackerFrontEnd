import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="homeDiv">
      
      <img className='homePic' src={require('./Pic/working out .jpeg')}/>
      <h1 className='welcome'>Welcome To Fitness Tracker</h1>
    </div>
  );
};

export default Home;
