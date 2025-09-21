import React from "react";
import wallet from "../AboutUs/img/wallet.jpg"; // поправь путь если другой

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-box" data-aos="fade-up">
        <h1 className="about-title" data-aos="zoom-in">About Us</h1>

        <p className="about-text" data-aos="fade-right">
          Welcome to <span className="highlight">Lost & Found</span> — a platform
          designed to reconnect people with their lost belongings. Losing
          something valuable can be stressful, whether it’s a wallet, phone,
          or a sentimental item.
        </p>

        <div className="about-image" data-aos="flip-left">
          <img src={wallet} alt="Lost Wallet" />
        </div>

        <h2 className="about-subtitle" data-aos="fade-left">Our Mission</h2>
        <p className="about-text">
          To build a trustworthy community where honesty and kindness lead the
          way, ensuring every lost item has the chance to return home.
        </p>

        <h2 className="about-subtitle" data-aos="fade-left">Our Vision</h2>
        <p className="about-text">
          We imagine a world where technology and people work together to solve
          everyday problems — like finding what you’ve lost.
        </p>

        <h2 className="about-subtitle" data-aos="fade-left">How It Works</h2>
        <p className="about-text">
          • Report a lost item.  
          • Browse found items.  
          • Report something you found.  
        </p>

        <h2 className="about-subtitle" data-aos="fade-left">Why Choose Us?</h2>
        <p className="about-text">
          ✅ Safe and simple  
          ✅ Trusted community  
          ✅ Fast search & filter  
          ✅ Focused on kindness  
        </p>

        <h2 className="about-subtitle" data-aos="fade-left">Join Us</h2>
        <p className="about-text">
          Whether you’ve lost or found something, use our platform to reconnect
          items with their owners. Small acts of kindness build a stronger
          community.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
