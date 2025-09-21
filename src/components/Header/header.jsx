import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";


function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="header" data-aos="fade-down">
      <div className="logo">
        <img src="/logo.png" alt="I Found Logo" className="logo-img" />
        <span className="logo-text">I-Found</span>
        <small className="slogan">Search · Connect · Recover</small>
      </div>

      <nav className="nav" data-aos="fade-up">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/lost">Lost</Link>
        <Link className="nav-link" to="/ReportL">Report Lost</Link>
        <Link className="nav-link" to="/found">Found</Link>
        <Link className="nav-link" to="/ReportF">Report Found</Link>
        <Link className="nav-link" to="/AboutUs">About Us</Link>
      </nav>

      <div className="auth" data-aos="zoom-in">
        <button className="signout-btn">Sign Out</button>
        <button className="theme-btn" onClick={toggleDark}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;
