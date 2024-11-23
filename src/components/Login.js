import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';  // Corrected import
import './login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const token = res.data.token;

      if (!isValidToken(token)) {
        throw new Error('Invalid token format');
      }

      localStorage.setItem('token', token);

      const decoded = jwtDecode(token);
      const decodedUsername = decoded.username;

      localStorage.setItem('username', decodedUsername);
      onLogin(decodedUsername, token); // Pass username and token to App
      navigate('/blog-list');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  const isValidToken = (token) => {
    const parts = token.split('.');
    if (parts.length !== 3) return false; // Invalid token format

    const decoded = jwtDecode(token);
    const expiryDate = decoded.exp * 1000; // Convert to milliseconds
    return Date.now() < expiryDate;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      setIsRegister(false);
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={isRegister ? handleRegister : handleLogin}>
        {isRegister && (
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegister ? (
          <>
            Already have an account?{' '}
            <span onClick={() => setIsRegister(false)} className="toggle-link">
              Login
            </span>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <span onClick={() => setIsRegister(true)} className="toggle-link">
              Register
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default Login;