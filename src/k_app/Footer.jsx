import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = ({ scrollToSection }) => {
  return (
    <div>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>We provide the best products at the most affordable prices. Your satisfaction is our top priority.</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#mens-section" onClick={(e) => { e.preventDefault(); scrollToSection('mens-section'); }}>Men</a></li>
                        <li><a href="#women-section" onClick={(e) => { e.preventDefault(); scrollToSection('women-section'); }}>Women</a></li>
                        <li><a href="#kids-section" onClick={(e) => { e.preventDefault(); scrollToSection('kids-section'); }}>Kids</a></li>
                        <li><a href="#bags-section" onClick={(e) => { e.preventDefault(); scrollToSection('bags-section'); }}>Bag</a></li>
                        <li><a href="#shoes-section" onClick={(e) => { e.preventDefault(); scrollToSection('shoes-section'); }}>Shoes</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                <h3>Customer Service</h3>
                <ul>
                    <li><Link to="/help">Help & FAQs</Link></li>
                    <li><Link to="/shipping">Shipping</Link></li>
                    <li><Link to="/returns">Returns</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact Us</h3>
                <p>Email: Nykaa@shopping.com</p>
                <p>Phone: +91 98745 43910</p>
                <p>Address: Hyderabad, India</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2025 NykaaShopping. All rights reserved.</p>
        </div>
        </footer>
    </div>
  )
}

export default Footer


