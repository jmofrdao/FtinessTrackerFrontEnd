import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="homeDiv">
      <h1 className="homeTitle">Welcome to Fitness Tracker</h1>
      <p className='homeP'>An app that will track your routines and activities!</p>
      <p className='home2p'>Sign in or sign up to create different routines and activities! Or continue as a guest to view the routines and activities!</p>
    </div>
  );
};

export default Home;
