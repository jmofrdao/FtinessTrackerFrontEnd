import React from 'react'
import { registerPerson } from '../api'



const Register = ({username,password,setPassword,setUsername, setIsLoggedIn}) => {
    async function handleSubmit(event) {
        event.preventDefault()
         await registerPerson(username, password)
        
            }
    return (
        <div id = "registerBox">
       <form id = "registerFlex" onSubmit={handleSubmit}>
            <h1>Register for your Fitness Tracker account</h1>
            <label>Create a username:</label>
            <input className="registerInputs" 
            placeholder="Create username here"
            value = {username}
            onChange={(event)=>{
                setUsername(event.target.value)
            }}>
            </input>
            <label>Creat a Password:</label>
            <input  type='password' className="registerInputs" 
            placeholder="Create password here"
            value = {password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}></input>
            <button type="submit">Sign Up!</button>
        </form>
        </div>
    )
}


export default Register