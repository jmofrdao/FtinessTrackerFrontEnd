import React from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import "./css/Header.css"





const Header = ({isLoggedIn, setIsLoggedIn, setUsername, setPassword}) => {

    

    return (
    <div id="navBar">
        <header>
            <h1 id="title">Fitness Tracker</h1>
            {isLoggedIn ? (
        <>
            <NavLink to="/" className="navBarTabs">
                Home
            </NavLink>
            <NavLink to="/MyRoutines" className="navBarTabs">
                My Routines
            </NavLink>
            <NavLink to='/Routines' className="navBarTabs">Routines</NavLink>
            <NavLink to='/Activities' className="navBarTabs"> Activities</NavLink>
            <NavLink to='/Logout' className="navBarTabs">Logout</NavLink>
        </>  
            ) : (
        <>
        <NavLink to="/" className="navBarTabs">
            Home
        </NavLink>
        
            <NavLink to='/Login' className="navBarTabs">Sign Up/Sign In</NavLink>
            <NavLink to='/Routines' className="navBarTabs">Routines</NavLink>
            <NavLink to='/Activities' className="navBarTabs"> Activities</NavLink>
        </>
            ) 
            }          
        </header>
    </div>
    )
}

export default Header