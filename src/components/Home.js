import React from "react";

function Home() {
  return (
    <div className="home">
      <nav className="home-nav">
        <a href="#" className="home-nav-link">
          About
        </a>
        <a href="#" className="home-nav-link">
          Login
        </a>
      </nav>
      <h1 className="home-header">Mitch's Math</h1>
      <h2 className="home-header-sub">To get started, select a program!</h2>
      <div className="programs">
        <div className="programs-box">
          <h1 className="programs-box-header">2nd - 8th Grade Math</h1>
          <img className="programs-box-img-1"></img>
        </div>
        <div className="programs-box">
          <h1 className="programs-box-header">Algebra I</h1>
          <img className="programs-box-img-2"></img>
        </div>
        <div className="programs-box">
        <h1 className="programs-box-header">Geometry</h1>
        <img className="programs-box-img-3"></img>
        </div>
        <div className="programs-box">
        <h1 className="programs-box-header">Algrebra II/Trigonometry</h1>
        <img className="programs-box-img-4"></img>
        </div>
        <div className="programs-box">Pre-Calculus</div>
        <div className="programs-box">Calculus I</div>
        <div className="programs-box">Calculus II</div>
        <div className="programs-box">Calculus III</div>
        <div className="programs-box">Linear Algrebra</div>
        <div className="programs-box">Statistics</div>
        <div className="programs-box">Differential Equations</div>
      </div>
    </div>
  );
}

export default Home;
