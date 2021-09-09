import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="home-nav">
      <Link to="/programs" className="home-nav-link">
        Home
      </Link>
      <Link to="/about" className="home-nav-link">
        About
      </Link>
      <Link to="/login" className="home-nav-link">
        Login
      </Link>
    </nav>
  );
}

export default Header;
