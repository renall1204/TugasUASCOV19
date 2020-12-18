import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class = "header">
    <nav align = 'center'>
      <ul className="nav-links">
      <Link style={{ 
            color: "#F4B41A", 
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
            }} to="/">
        <li>Home</li>
      </Link>
        <Link
          style={{
            color: "#F4B41A",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/Symptom"
        >
          <li>General Information</li>
        </Link>

        <Link
          style={{
            color: "#F4B41A",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/world"
          
        >
          <li>World Tracker</li>
        </Link>

        <Link style={{ 
            color: "#F4B41A", 
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
            }} to="/indo">
        <li>Indonesia Global Tracker</li>
        </Link>
        <Link
          style={{ 
            color: "#F4B41A", 
            textDecoration: "none", 
            marginTop: "10px" }}
          to="/aboutus"
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
    </div>);
}

export default Nav;