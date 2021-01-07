import React from "react";
import { Link } from "react-router-dom";

function ProgramDetails() {
  return (
    <div className="programDetails">
      <nav className="home-nav">
        <Link to="/about" className="home-nav-link">
          About
        </Link>
        <Link to="/login" className="home-nav-link">
          Login
        </Link>
      </nav>
      <h1>Choose the amount of days per week you want to be tutored:</h1>
    </div>
  );
}

export default ProgramDetails;
