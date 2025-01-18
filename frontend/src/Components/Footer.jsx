import React from "react";
import "../Styling/Footer.css";

const Footer = () => {
  return (
    <div id="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-title">CharityFund - Make a Difference</h3>

          <div className="footer-details">
            <div className="footer-info">
              <p className="footer-about">
                <strong>About Us:</strong> We are dedicated to making a positive impact through various charitable initiatives.
              </p>
              <p className="footer-contact">
                <strong>Contact:</strong> info@charityfund.com | +91 9583285643
              </p>
            </div>
            <div className="footer-social">
              <p className="footer-follow"><strong>Follow Us:</strong></p>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/charityfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/charityfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/charityfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <p className="footer-copyright">
            © 2025 CharityFund. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
