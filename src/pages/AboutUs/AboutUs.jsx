import React from "react";
import "./spg.css";
import wallet from "../AboutUs/img/wallet.jpg";

function Spg() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          At <span className="highlight">Lost & Found</span>, we know how stressful it can be to lose something
          important. Whether it’s a wallet, a phone, or a sentimental keepsake,
          losing an item often means losing peace of mind. That’s why we built
          this platform: to give people an easy, safe, and reliable way to
          reconnect with their lost belongings.
        </p>
        <div className="about-image">
          <img src={wallet} alt="Lost Wallet" />
        </div>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          Our mission is simple — to create a community based on honesty and
          trust, where every lost item gets a chance to find its way back home.
          We believe that small acts of kindness, like returning a stranger’s
          belongings, can make a big difference.
        </p>
      </div>
    </div>
  );
}

export default Spg;
