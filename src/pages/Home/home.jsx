import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className="hero-container">
      <div className="hero-text">
        <h1>
          Find & <br />
          Recover <br />
          <span className="highlight">With Ease</span>
        </h1>
        <p className="hero-subtext">
          Experience effortless recovery with o ur dedicated lost and found
          service.
        </p>
      </div>
      <div>
        <div className="btn-group">
          <button className="btn btn-lost">
           <Link to="/Lost"> Lost <span className="icon">📦</span></Link>
          </button>
          <button className="btn btn-found">
           <Link to="/Found"> Found <span className="icon">✅</span></Link>
          </button>
        </div>

        <div className="hero-images">
          <img src="https://picsum.photos/200/120?random=1" alt="lost" />
          <img src="https://picsum.photos/200/120?random=2" alt="found" />
          <img src="https://picsum.photos/200/120?random=3" alt="notice" />
          <img src="https://picsum.photos/200/120?random=4" alt="item" />
        </div>
      </div>
    </main>
  );
}

export default Home;
