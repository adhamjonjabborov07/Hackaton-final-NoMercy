import React from "react";
import "./home.css";

// Rasmlarni import qilish
import imageMain from './image.png';
import documentsImg from './documents.png';
import keysImg from './keys.png';
import phoneImg from './phone.png';
import usbImg from './usb.png';
import walletImg from './wallet.png';

function Home() {
  return (
    <>
      <main className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              The essential list every modern person needs: how to avoid losing things and what to do when you find something.
            </h1>
            <p className="hero-subtitle">
              A smart way to report lost items and find what you’ve left behind.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Report Lost Item</button>
              <button className="cta-button secondary">View Found Items</button>
            </div>
          </div>

          {/* Main Illustration */}
          <div className="illustration-section">
            <img
              src={imageMain}
              alt="Lost and found items collection"
              className="main-illustration"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">How It Works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L8 8H16L12 4Z" fill="#4A90E2" />
                  <path d="M8 12H16M8 16H16" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 20V16" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Report Instantly</h3>
              <p>Submit your lost item in seconds with photos and details.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#4CAF50" />
                  <path d="M12 16V12M12 8H12.01" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Track Status</h3>
              <p>Get real-time updates on whether your item has been found.</p>
            </div>

            <div className="feature-card">
              <div className="icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 14L12 16M12 8L12 10M12 18L12 20M8 12L10 12M14 12L16 12M12 20L12 22M12 22L10 20M12 22L14 20" stroke="#F44336" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Secure Matching</h3>
              <p>Items are verified before being returned to the rightful owner.</p>
            </div>
          </div>
        </section>

        {/* Items Showcase */}
        <section className="items-showcase">
          <h2 className="section-title">Common Lost Items</h2>
          <div className="items-grid">
            {/* USB Drive */}
            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={usbImg} alt="USB" />
              </div>
              <p className="item-text">USB Drive</p>
              <div className="status-indicator found"></div>
            </div>

            {/* Documents */}
            <div className="item-card card-green">
              <div className="item-icon">
                <img src={documentsImg} alt="Documents" />
              </div>
              <p className="item-text">Documents</p>
              <div className="status-indicator lost"></div>
            </div>

            {/* Keys */}
            <div className="item-card card-orange">
              <div className="item-icon">
                <img src={keysImg} alt="Keys" />
              </div>
              <p className="item-text">Keys</p>
              <div className="status-indicator found"></div>
            </div>

            {/* Phone */}
            <div className="item-card card-purple">
              <div className="item-icon">
                <img src={phoneImg} alt="Phone" />
              </div>
              <p className="item-text">Phone</p>
              <div className="status-indicator lost"></div>
            </div>

            {/* Wallet */}
            <div className="item-card card-red large-item">
              <div className="item-icon">
                <img src={walletImg} alt="Wallet" />
              </div>
              <p className="item-text">Wallet</p>
              <div className="status-indicator important"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;