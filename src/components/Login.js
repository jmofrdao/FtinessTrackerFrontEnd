import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import "./css/Login.css"

const Login = ({
  username,
  password,
  setPassword,
  setUsername,
  setIsLoggedIn,
}) => {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await loginUser(username, password);

    const token = result.token;
    if (result.error) {
      setError(result);
      setIsLoggedIn(false);
    } else if (token) {
      setError(null);
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setUsername(username);
      setIsLoggedIn(true);
      navigate("/MyRoutines");
    }
  };

  const registerButton = async (event) => {
    event.preventDefault();
    navigate("/Register");
  };
  return (
    <div className='homeDiv'>
       <img className='loginPic' src={require('./Pic/lifting.webp')}/>
    <form className='formSub' onSubmit={handleSubmit}>
    
      
      <h1>Log into your account!</h1>
      {error && error.message ? <h3>{error.message}</h3> : null}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button type="submit">Log In</button>
      <button type="submit" onClick={registerButton}>
        Sign Up!
      </button>
     
    </form>
    </div>
  );
};

export default Login;
