// Footer.js
import React from 'react';
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Nanhe Munhe</h1>
          <p>Your Little Ones' Store</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/girls-special">Girls Special</a></li>
            <li><a href="/boys-special">Boys Special</a></li>
            {/* Add more links */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nanhe Munhe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
