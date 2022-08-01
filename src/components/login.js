import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../api'




const Login = ({username,password,setPassword,setUsername, isLoggedIn, setIsLoggedIn}) => {
    let navigate = useNavigate()
const handleSubmit = async (event) => {
    event.preventDefault()
    const token = await loginUser(username, password)
    token ? setIsLoggedIn(true) : false
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    setUsername(username)
    navigate('/myRoutines')
}

const registerButton = async(event) => {
    event.preventDefault()
    navigate('/Register')
}
    return (
        <form
        onSubmit={handleSubmit}
        >
            <label>
                Username: 
            </label>
            <input type='text' value={username} name='username' onChange={(event)=> {setUsername(event.target.value)}}/>
            <label>
                Password: 
            </label>
            <input type='password' value={password} name='password' onChange={(event)=> {setPassword(event.target.value)}}/>
            <button type='submit'>Log In</button>
            <button type='submit' onClick={registerButton}>Sign Up!</button>
        </form>
    )
}

export default Login