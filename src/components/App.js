import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {Home, Header, Login, MyRoutines, Routines, AddActivity, AddRoutine, RoutineActivity, Logout} from "./index";
import Activities from "./Activities";
import Register from "./Register";




const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [myRoutines, setMyRoutines] = useState([])
    const [routines, setRoutines] = useState([])
    const [activities, setActivities] = useState([])

    useEffect (()=>{
        if(localStorage.getItem("token")){
          setIsLoggedIn(true)
        }
        },[]) 
    return (
        <div>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setPassword={setPassword}/>
        <div>
            {isLoggedIn ? (
        <Routes>
            <Route
            path = "/Home"
            element={<Home/>}
            />
            <Route
            path = "/MyRoutines"
            element={<MyRoutines setMyRoutines={setMyRoutines} myRoutines={myRoutines}/>}
            />
            <Route 
            path='/Routines'
            element={<Routines routines={routines} setRoutines={setRoutines} isLoggedIn={isLoggedIn}/>}/>
            <Route
            path='/RoutineActivity'
            element={<RoutineActivity />}/>
            <Route 
            path='/AddRoutine'
            element={<AddRoutine routines={routines} setRoutines={setRoutines}/>}/>
            <Route path='/Activities'
            element={<Activities activities={activities} setActivities={setActivities} isLoggedIn={isLoggedIn}/>}/>
            <Route 
            path='/AddActivity'
            element={<AddActivity isLoggedIn={isLoggedIn} setActivities={setActivities} activities={activities}/>}/>
            <Route 
            path='/Logout'
            element={<Logout setUsername={setUsername} setPassword={setPassword} setIsLoggedIn={setIsLoggedIn}/>}/>
            </Routes>
            ) : (
                <div>
                <Routes>
                <Route 
            path='/Routines'
            element={<Routines routines={routines} setRoutines={setRoutines}/>}/>
            <Route path='/Activities'
            element={<Activities activities={activities} setActivities={setActivities}/>}/>
            <Route
            path = '/Login' 
            element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route 
            path='/Register'
            element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
        </div>
        )}
        </div>
        </div>
    )
}

export default App