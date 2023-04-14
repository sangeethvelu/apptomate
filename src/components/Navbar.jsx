import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <NavLink to="/">Form Input</NavLink>
            <NavLink to="/formresult">Form Result</NavLink>
        </div>
    )
}

export default Navbar;