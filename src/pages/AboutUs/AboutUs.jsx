import React from "react";
import "./aboutus.css";
import wallet from "../AboutUs/img/wallet.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-hero" data-aos="fade-up">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to <span className="highlight">Lost & Found</span> — a platform built to bring people together by helping them recover what matters most. 
          From wallets and phones to personal keepsakes, we provide a safe and simple way for lost items to be returned to their rightful owners.
        </p>
      </section>

      <section className="about-mission" data-aos="fade-right">
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          Our mission is to create a community rooted in <span className="highlight">honesty</span> and <span className="highlight">trust</span>. 
          We believe that every lost item deserves the chance to find its way back home, and every act of kindness makes the world a better place.
        </p>
        <div className="about-image">
          <img src={wallet} alt="Lost Wallet" />
        </div>
      </section>

      <section className="about-how" data-aos="fade-left">
        <h2 className="about-subtitle">How It Works</h2>
        <div className="about-steps">
          <div className="step-card">
            <h3>🔍 Report Lost</h3>
            <p>Quickly create a post with details and images of what you’ve lost.</p>
          </div>
          <div className="step-card">
            <h3>📩 Report Found</h3>
            <p>Found something? Upload information so the rightful owner can contact you.</p>
          </div>
          <div className="step-card">
            <h3>🤝 Connect</h3>
            <p>We connect finders and owners through a secure and safe system.</p>
          </div>
        </div>
      </section>

      <section className="about-team" data-aos="fade-up">
        <h2 className="about-subtitle">Our Team</h2>
        <p className="about-text">
          Behind Lost & Found is a passionate team of developers, designers, and community builders dedicated to solving real-life problems with technology. 
          Together, we strive to make helping others easier, safer, and more rewarding.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;