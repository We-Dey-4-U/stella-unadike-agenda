import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            {/* Replace the brand text with an image */}
            <div className="navbar-brand">
                <img src='/images/stellalogo.JPG' alt="Logo" className="logo" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/complaints">Complaints</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;