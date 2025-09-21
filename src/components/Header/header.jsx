import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>
        <Link to={"/"}>Home</Link>
      </div>

      <nav className="nav">
        <Link className="pages-style" to="/Secondpage">
          SecondPage
        </Link>
        <Link className="pages-style" to="/Thirdpage">
          Thirdage
        </Link>
      </nav>

      {/* <div className="right">
        <Link to="/login" className="btn btn-primary">
          Sign In
        </Link>
        <Link to="/signUp" className="btn btn-primary">
          Sign Up
        </Link>
      </div> */}
    </header>
  );
}

export default Header;
