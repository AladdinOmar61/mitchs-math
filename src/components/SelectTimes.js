import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";

function SelectTimes() {
  return (
    <div className="select-times">
      <Header />
      <h1 className="select-time">Select Times</h1>
      <div className="select-time-range">
        <Link className="select-time-range-link" to="/confirmation">
          <div className="select-time-range-1">10:00AM - 12:00PM</div>
        </Link>
        <Link className="select-time-range-link" to="/confirmation">
          <div className="select-time-range-2">1:00PM - 3:00PM</div>
        </Link>
        <Link className="select-time-range-link" to="/confirmation">
          <div className="select-time-range-3">4:00PM - 6:00PM</div>
        </Link>
      </div>
    </div>
  );
}

export default SelectTimes;
