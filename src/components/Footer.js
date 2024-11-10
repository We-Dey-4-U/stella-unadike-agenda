import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                {/* About Section with condensed bio */}
                <div className="footer-about">
                    <h4>About Honourable Stella Unadike</h4>
                    <p>
                        Honourable Evangelist Stella Unadike Nonyerem is a dedicated public servant elected to represent Osusu 1 Ward 3, Aba North LGA. With a background in Sociology and Psychology from the University of Port Harcourt, she has led projects in youth development, public health, and infrastructure improvement. Her leadership is driven by transparency and a vision for sustainable, inclusive growth for her constituents.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Email: <a href="mailto:hon.stella@example.com">hon.stella@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    <p></p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Honourable Stella Unadike. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;