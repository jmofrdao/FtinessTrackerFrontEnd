import React, { useState } from "react";
import { registerPerson } from "../api";
import "./css/Register.css"

const Register = ({
  username,
  password,
  setPassword,
  setUsername,
  setIsLoggedIn,
}) => {
  const [error, setError] = useState(null);
  const [myResult, setMyResult] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await registerPerson(username, password);

    const token = result.token;
    if (result.error) {
      setError(result);
      setMyResult(null);
      setIsLoggedIn(false);
    } else if (token) {
      setError(null);
      setMyResult(result);
      localStorage.setItem("username", username);
      setUsername("");
      setPassword("");
    }
  }
  return (
    <div className="registerBox">
      <img className='registerPic' src={require('./Pic/weightLift.jpeg')}/>
      <form className="registerFlex" onSubmit={handleSubmit}>
        <h1>Register for your Fitness Tracker account</h1>
        {error && error.message ? <h3>{error.message}</h3> : null}
        {myResult && myResult.message ? <h3>{myResult.message}</h3> : null}

        <label>Create a username:</label>
        <input
          className="registerInputs"
          placeholder="Create username here"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <label>Creat a Password:</label>
        <input
          type="password"
          className="registerInputs"
          placeholder="Create password here"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default Register;
