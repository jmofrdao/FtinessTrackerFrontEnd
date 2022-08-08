import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
    <>
      <h1>Are you sure you want to logout {username}?</h1>
      <NavLink to="/">Return Home</NavLink>
      <button onClick={handleUserLogout}>Logout</button>
    </>
  );
};

export default Logout;
