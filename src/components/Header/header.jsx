import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
<<<<<<< HEAD


=======
import Logo from "../Header/Group 46.png";
>>>>>>> 3412bbb203299ee69a875cadb93c47df8af812cb
function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="header" data-aos="fade-down">
      <div className="logo">
<<<<<<< HEAD
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
=======
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
>>>>>>> 3412bbb203299ee69a875cadb93c47df8af812cb
        </button>
      </div>
    </header>
  );
}

export default Header;
