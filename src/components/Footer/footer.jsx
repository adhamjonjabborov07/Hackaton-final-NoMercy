import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import "./footer.css";
import Logo from "../Footer/Group 46.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Lost and Found Logo" className="logo" />
        </div>

        <div className="footer-section">
          <h3>Site</h3>
          <ul className="link-ul">
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
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Tel: +94 716520690</p>
          <p>
            Telegram Bot:{" "}
            <a target="blank" href="https://t.me/hexsn1per_bot">
              @hexsn1per_bot
            </a>
          </p>
          <div className="social-icons">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Copyright 2024 Lost and Found <br /> All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
