import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // style yozib olishing uchun

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="I Found Logo" className="logo-img" />
        <span className="logo-text">I-Found</span>
        <small className="slogan">Search · Connect · Recover</small>
      </div>

      <nav className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/lost">
          Lost
        </Link>
        <Link className="nav-link" to="/report-lost">
          Report Lost
        </Link>
        <Link className="nav-link" to="/found">
          Found
        </Link>
        <Link className="nav-link" to="/report-found">
          Report Found
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      </nav>

      <div className="auth">
        <button className="signout-btn">Sign Out</button>
      </div>
    </header>
  );
}

export default Header;
