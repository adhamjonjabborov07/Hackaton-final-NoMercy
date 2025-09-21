import React from "react";
import "./spg.css";
import wallet from "../AboutUs/img/wallet.jpg";

function spg() {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>
          At Lost & Found, we know how stressful it can be to lose something
          important. Whether it’s a wallet, a phone, or a sentimental keepsake,
          losing an item often means losing peace of mind. That’s why we built
          this platform: to give people an easy, safe, and reliable way to
          reconnect with their lost belongings.
        </p>
        <h2>Our mission</h2>
        <img src={wallet} alt="" />
      </div>
    </>
  );
}

export default spg;
