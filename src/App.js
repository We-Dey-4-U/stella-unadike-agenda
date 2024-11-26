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
import Dashboard from './components/Dashboard'; // Import Dashboard
import ProfileSettings from './components/ProfileSettings'; // Adjust the path as per your project structure
import { jwtDecode } from 'jwt-decode';

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <div>Please log in to access this page.</div>;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Token expired
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      return <div>Session expired. Please log in again.</div>;
    }
    return children;
  } catch (error) {
    console.error('Invalid token', error);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    return <div>Invalid session. Please log in again.</div>;
  }
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

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
        <Route path="/Home" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/post-form" element={<AdminPostForm />} />
        <Route path="/blog-list" element={<BlogList isLoggedIn={isLoggedIn} />} />
        <Route path="/blog-post/:id" element={<BlogPost isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileSettings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;