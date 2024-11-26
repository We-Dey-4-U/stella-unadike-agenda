import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, username: propUsername, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState(propUsername || localStorage.getItem('username') || '');


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    // Listen for changes to localStorage and update the username
   // Listen for changes to localStorage and update the username
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername && storedUsername !== username) {
      setUsername(storedUsername); // Update state if it's different
    }
  }, [isLoggedIn, propUsername]);  // Watch for changes to login status or propUsername

  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <img src='/images/stellalogo.JPG' alt="Logo" className="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <span className={isOpen ? 'bar open' : 'bar'}></span>
            <span className={isOpen ? 'bar open' : 'bar'}></span>
            <span className={isOpen ? 'bar open' : 'bar'}></span>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/agenda">Agenda</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/admin/post-form">Postform</Link></li>
            <li><a href="/dashboard">Dashboard</a></li>
        <    li><a href="/profile">Profile Settings</a></li>
            <li><Link to="/blog-list">Blog</Link></li>
            {isLoggedIn ? (
                <>
                    <li>Welcome, {username || 'Guest'}</li>
                    <li><button onClick={onLogout}>Logout</button></li>
                </>
            ) : (
                <li><Link to="/">Login</Link></li>
            )}
        </ul>
    </nav>
  );
};

export default Navbar;