import React from "react";
import {NavLink} from "react-router-dom";





const Header = () => {
    return (
       <header>
        <h1>Fitness Tracker</h1>
        <NavLink to="/">
            Home
        </NavLink>
       </header>
    )
}

export default Header