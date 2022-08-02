import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Header, Login, MyRoutines} from "./";
import Register from "./register";




const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [myRoutines, setMyRoutines] = useState([])
    return (
        <div>
        <Header/>
        <Routes>
            <Route
            path = "/home"
            element={<Home/>}
            />
            <Route
            path = "/myroutines"
            element={<MyRoutines />}
            />
            <Route
            path = '/login' 
            element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route 
            path='/register'
            element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
        </div>
    )
}

export default App