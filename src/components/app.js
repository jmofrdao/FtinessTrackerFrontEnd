import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Header, Login} from "./";
import Register from "./register";




const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLogginIn] = useState(false)
    return (
        <div>
        <Header/>
        <Routes>
            <Route
            path = "/home"
            element={<Home/>}
            />
            <Route
            path = '/login' 
            element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLogginIn={setIsLogginIn}/>}/>
            <Route 
            path='/Register'
            element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLogginIn={setIsLogginIn}/>}/>
        </Routes>
        </div>
    )
}

export default App