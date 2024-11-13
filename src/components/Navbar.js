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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                {/* Add Blog Page Link */}
                <li><Link to="/blog-list">Blog</Link></li> {/* BlogList link */}
                <li> <Link to="/admin/post-form">Create Post</Link> </li> {/* Admin Post Form link */}
            </ul>
        </nav>
    );
};

export default Navbar;