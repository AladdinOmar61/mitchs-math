import React from "react";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <div className="home">
      <nav className="home-nav">
        <Link to="/about" className="home-nav-link">
          About
        </Link>
        <Link to="/login" className="home-nav-link">
          Login
        </Link>
      </nav>
      <h1 className="home-header">
        Mitch's<span className="math">Math</span>
      </h1>
      <h2 className="home-header-sub">To get started, select a program!</h2>
      <div className="programs">
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">2nd - 8th Grade Math</h1>
            <div className="programs-box-img-1"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Algebra I</h1>
            <div className="programs-box-img-2"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Geometry</h1>
            <div className="programs-box-img-3"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Algrebra II/Trigonometry</h1>
            <div className="programs-box-img-4"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Pre-Calculus</h1>
            <div className="programs-box-img-5"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Calculus I</h1>
            <div className="programs-box-img-6"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Calculus II</h1>
            <div className="programs-box-img-7"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Calculus III</h1>
            <div className="programs-box-img-8"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Linear Algrebra</h1>
            <div className="programs-box-img-9"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Statistics</h1>
            <div className="programs-box-img-10"></div>
          </div>
        </Link>
        <Link to="/programs">
          <div className="programs-box">
            <h1 className="programs-box-header">Differential Equations</h1>
            <div className="programs-box-img-11"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Programs;
