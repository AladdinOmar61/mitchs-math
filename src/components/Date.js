import React from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar.js";

function Date() {
  return (
    <div className="date">
      <nav className="home-nav">
        <Link to="/about" className="home-nav-link">
          About
        </Link>
        <Link to="/login" className="home-nav-link">
          Login
        </Link>
      </nav>
      <div className="date-space">
        <h1 className="select-days">Select A Day</h1>
        <Calendar />
      </div>
    </div>
  );
}

export default Date;
