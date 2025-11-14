import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '40px 20px 10px', fontFamily: 'Arial, sans-serif', width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1100px', margin: 'auto', gap: '20px' }}>
        {/* Column 1 */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ marginBottom: '10px', color: '#ff6f00' }}>ShopEase</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#ccc' }}>
            Your one-stop destination for kids, men, and women’s fashion.
            Discover amazing deals every day!
          </p>
        </div>

        {/* Column 2 */}
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ marginBottom: '10px', color: '#ff6f00' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li style={{ margin: '5px 0' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>Home</a></li>
            <li style={{ margin: '5px 0' }}><a href="#kids" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>Kids Wear</a></li>
            <li style={{ margin: '5px 0' }}><a href="#men" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>Men</a></li>
            <li style={{ margin: '5px 0' }}><a href="#women" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>Women</a></li>
            <li style={{ margin: '5px 0' }}><a href="#women" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>Shoes</a></li>
            <li style={{ margin: '5px 0' }}><a href="#women" style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.3s ease' }}>Bags</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={{ flex: '1 1 250px' }}>
          <h4 style={{ marginBottom: '10px', color: '#ff6f00' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', transition: 'color 0.3s ease' }}><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', transition: 'color 0.3s ease' }}><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '20px', transition: 'color 0.3s ease' }}><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #444', fontSize: '14px', color: '#bbb' }}>
        <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
}


