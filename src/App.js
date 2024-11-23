import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Agenda from './components/Agenda';
import AdminPostForm from './components/AdminPostForm';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          // Token expired
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          setIsLoggedIn(false);
          setUsername('');
        } else {
          // Token is valid
          setIsLoggedIn(true);
          setUsername(decoded.username || '');
        }
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername('');
      }
    }
  }, []);

  const handleLogin = (username, token) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/post-form" element={<AdminPostForm />} />
        <Route path="/blog-list" element={<BlogList isLoggedIn={isLoggedIn} />} />
        <Route path="/blog-post/:id" element={<BlogPost isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<BlogList isLoggedIn={isLoggedIn} onLogin={handleLogin}/>} />
        <Route path="/post/:id" element={<BlogPost isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;