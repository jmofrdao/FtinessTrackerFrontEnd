import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Logout.css"

const Logout = ({ setIsLoggedIn, setUsername, setPassword }) => {
  const navigate = useNavigate();
  function handleUserLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
    setUsername("");
    setPassword("");
  }

  const username = localStorage.getItem("username");

  return (
    <div className="logoutDiv">
      <h1>Are you sure you want to logout {username}?</h1>
      <NavLink to="/" className='returnHome'>Return Home</NavLink>
      <button onClick={handleUserLogout}>Logout</button>
    </div>
  );
};

export default Logout;
