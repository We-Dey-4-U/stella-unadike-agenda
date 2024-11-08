// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Add styles for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Your Name. All rights reserved.</p>
                <p>Follow me on: 
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;