import React from "react";
import "./home.css";

// Asosiy rasmlar
import imageMain from './image.png';
import documentsImg from './icons/documents.png';
import keysImg from './icons/keys.png';
import phoneImg from './icons/phone.png';
import usbImg from './icons/usb.png';
import walletImg from './icons/wallet.png';

// 10 ta avvalgi yangi rasmlar
import passportImg from './icons/passport.png';
import headphonesImg from './icons/headphones.png';
import creditCardImg from './icons/credit-card.png';
import controllerImg from './icons/controller.png';
import tabletImg from './icons/tablet.png';
import sunglassesImg from './icons/sunglasses.png';
import teddyImg from './icons/teddy-bear.png';
import watchImg from './icons/watch.png';
import backpackImg from './icons/backpack.png';
import booksImg from './icons/books.png';

// Yangi 10 ta rasm
import footballImg from './icons/football.png';
import penSetImg from './icons/pen-set.png';
import toyCarImg from './icons/toy-car.png';
import powerBankImg from './icons/power-bank.png';
import artSuppliesImg from './icons/art-supplies.png';
import waterBottleImg from './icons/water-bottle.png';
import violinImg from './icons/violin.png';
import capImg from './icons/cap.png';
import cameraImg from './icons/camera.png';
import dollImg from './icons/doll.png';

function Home() {
  return (
    <>
      <main className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Never Lose Anything Again
            </h1>
            <p className="hero-subtitle">
              A smart way to report lost items and find what you've left behind.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Report Lost Item</button>
              <button className="cta-button secondary">View Found Items</button>
            </div>
          </div>

          <div className="illustration-section">
            <img
              src={imageMain}
              alt="Lost and found items collection"
              className="main-illustration"
            />
          </div>
        </section>

        {/* 🔍 SEARCH BAR SECTION */}
        <section className="search-section">
          <h2>Find Your Lost Item</h2>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Enter item name, location, or date..." 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </section>

        {/* 📊 STATISTICS DASHBOARD */}
        <section className="stats-dashboard">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50,000+</h3>
              <p>Items Recovered</p>
            </div>
            <div className="stat-card">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-card">
              <h3>24h</h3>
              <p>Avg. Response</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Countries</p>
            </div>
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
          <h2 className="section-title">All Lost & Found Items</h2>
          <div className="items-grid">
            {/* Asosiy 5 ta item */}
            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={usbImg} alt="USB" />
              </div>
              <p className="item-text">USB Drive</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-green">
              <div className="item-icon">
                <img src={documentsImg} alt="Documents" />
              </div>
              <p className="item-text">Documents</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-orange">
              <div className="item-icon">
                <img src={keysImg} alt="Keys" />
              </div>
              <p className="item-text">Keys</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-purple">
              <div className="item-icon">
                <img src={phoneImg} alt="Phone" />
              </div>
              <p className="item-text">Phone</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-red large-item">
              <div className="item-icon">
                <img src={walletImg} alt="Wallet" />
              </div>
              <p className="item-text">Wallet</p>
              <div className="status-indicator important"></div>
            </div>

            {/* 10 ta avvalgi yangi item */}
            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={passportImg} alt="Passport" />
              </div>
              <p className="item-text">Passport</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-purple">
              <div className="item-icon">
                <img src={headphonesImg} alt="Headphones" />
              </div>
              <p className="item-text">Headphones</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-red">
              <div className="item-icon">
                <img src={creditCardImg} alt="Credit Card" />
              </div>
              <p className="item-text">Credit Card</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-green">
              <div className="item-icon">
                <img src={controllerImg} alt="Controller" />
              </div>
              <p className="item-text">Controller</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-orange">
              <div className="item-icon">
                <img src={tabletImg} alt="Tablet" />
              </div>
              <p className="item-text">Tablet</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={sunglassesImg} alt="Sunglasses" />
              </div>
              <p className="item-text">Sunglasses</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-red">
              <div className="item-icon">
                <img src={teddyImg} alt="Teddy Bear" />
              </div>
              <p className="item-text">Teddy Bear</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={watchImg} alt="Watch" />
              </div>
              <p className="item-text">Watch</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-green">
              <div className="item-icon">
                <img src={backpackImg} alt="Backpack" />
              </div>
              <p className="item-text">Backpack</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-red">
              <div className="item-icon">
                <img src={booksImg} alt="Books" />
              </div>
              <p className="item-text">Books</p>
              <div className="status-indicator found"></div>
            </div>

            {/* Yangi 10 ta item - mavjud ranglardan foydalanilgan */}
            <div className="item-card card-green">
              <div className="item-icon">
                <img src={footballImg} alt="Football" />
              </div>
              <p className="item-text">Football</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={penSetImg} alt="Pen Set" />
              </div>
              <p className="item-text">Pen Set</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-red">
              <div className="item-icon">
                <img src={toyCarImg} alt="Toy Car" />
              </div>
              <p className="item-text">Toy Car</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-orange">
              <div className="item-icon">
                <img src={powerBankImg} alt="Power Bank" />
              </div>
              <p className="item-text">Power Bank</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-purple">
              <div className="item-icon">
                <img src={artSuppliesImg} alt="Art Supplies" />
              </div>
              <p className="item-text">Art Supplies</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-blue">
              <div className="item-icon">
                <img src={waterBottleImg} alt="Water Bottle" />
              </div>
              <p className="item-text">Water Bottle</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-red">
              <div className="item-icon">
                <img src={violinImg} alt="Violin" />
              </div>
              <p className="item-text">Violin</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-orange">
              <div className="item-icon">
                <img src={capImg} alt="Cap" />
              </div>
              <p className="item-text">Cap</p>
              <div className="status-indicator found"></div>
            </div>

            <div className="item-card card-purple">
              <div className="item-icon">
                <img src={cameraImg} alt="Camera" />
              </div>
              <p className="item-text">Camera</p>
              <div className="status-indicator lost"></div>
            </div>

            <div className="item-card card-red">
              <div className="item-icon">
                <img src={dollImg} alt="Doll" />
              </div>
              <p className="item-text">Doll</p>
              <div className="status-indicator found"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;