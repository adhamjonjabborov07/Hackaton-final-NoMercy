import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../Header/Group 46.png";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Загружаем сохранённый режим из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setDarkMode(true);
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="I Found Logo" className="logo-img" />
        </Link>
        <div className="second-logo">
          <span className="logo-text">I-Found</span>
          <small className="slogan">Search · Connect · Recover</small>
        </div>
      </div>

      <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/lost">Lost</Link>
        <Link className="nav-link" to="/ReportL">Report Lost</Link>
        <Link className="nav-link" to="/found">Found</Link>
        <Link className="nav-link" to="/ReportF">Report Found</Link>
        <Link className="nav-link" to="/AboutUs">AboutUs</Link>
      </nav>

      <div className="auth">
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
        <button className="signout-btn">
          <Link to="/SignUp">SignUp</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
