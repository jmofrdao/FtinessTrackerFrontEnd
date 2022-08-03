import React from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";





const Header = ({isLoggedIn, setIsLoggedIn}) => {

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
            <NavLink to='/Routines'>Routines</NavLink>
            <NavLink to='/Activities'> Activities</NavLink>
            <button onClick={handleUserLogout}>Logout</button>
        </>  
            ) : (
        <>
        <NavLink to="/">
            Home
        </NavLink>
        
            <NavLink to='/Login'>Sign Up/Sign In</NavLink>
            <NavLink to='/Routines'>Routines</NavLink>
            <NavLink to='/Activities'> Activities</NavLink>
        </>
            ) 
            }          
        </header>
    </div>
    )
}

export default Header