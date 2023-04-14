import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles["nav-container"]}> 
            <NavLink to="/">Form Input</NavLink>
            <NavLink to="/formresult">Form Result</NavLink>
        </div>
    )
}

export default Navbar;