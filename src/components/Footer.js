import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Home</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contactUs">Contact</Link></li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div className="footer-section">
          <h3>Sign Up Today to Pay Less for Your Energy!</h3>
          <p>Each month we roll out special offers and discounts for our solar panels.</p>
          <form className="email-form">
            <input type="email" placeholder="Your e-mail" required />
            <button type="submit">➤</button>
          </form>
          <div className="social-icons">
            <a href="#" className="social-icon">F</a>
            <a href="#" className="social-icon">T</a>
            <a href="#" className="social-icon">Y</a>
            <a href="#" className="social-icon">L</a>
          </div>
        </div>

        {/* About Company */}
        <div className="footer-section">
          <h3>Who We Are</h3>
          <p>
            An environmentally conscious renewable energy company that offers 
            the most eco-friendly, cost-efficient, and high-energy generating 
            products and solutions on the solar panels market!
          </p>
          <div className="certifications">
            <img src="/cert1.png" alt="Certification 1" />
            <img src="/cert2.png" alt="Certification 2" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 HARIHAR ENERGY, Inc. All rights reserved.</p>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Use</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
