import React from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";





const Header = ({isLoggedIn}) => {

    const navigate = useNavigate();
    function handleUserLogout() {
        setIsLoggedIn (false);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/");
    }

    return (
    <div>
        <header>
            <h1>Fitness Tracker</h1>
            {isLoggedIn ? (
        <>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/MyRoutines">
                My Routines
            </NavLink>
            <button onClick={handleUserLogout}>Logout</button>
        </>  
            ) : (
        <>
        <NavLink to="/">
            Home
        </NavLink>
        
            <NavLink to='/Login'>Sign Up/Sign In</NavLink>
        </>
            ) 
            }          
        </header>
    </div>
    )
}

export default Header