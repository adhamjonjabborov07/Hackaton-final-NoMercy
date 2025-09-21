import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../Header/Group 46.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="I Found Logo" className="logo-img" />
        <div className="second-logo">
          <span className="logo-text">I-Found</span>
          <small className="slogan">Search · Connect · Recover</small>
        </div>
      </div>

      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/lost">
          Lost
        </Link>
        <Link className="nav-link" to="/ReportL">
          Report Lost
        </Link>
        <Link className="nav-link" to="/found">
          Found
        </Link>
        <Link className="nav-link" to="/ReportF">
          Report Found
        </Link>
        <Link className="nav-link" to="/AboutUs">
          AboutUs
        </Link>
      </nav>

      <div className="auth">
        <button className="signout-btn">
          <Link to="/SignUp">SignUp</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
