import React from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar.js";

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
      <div className="details-space">
        <h1 className="select-days">Select A Day</h1>
        <Calendar />
      </div>
    </div>
  );
}

export default ProgramDetails;
