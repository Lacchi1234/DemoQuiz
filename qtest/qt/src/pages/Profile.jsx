import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctUsername = 'Admin24';
    const correctPassword = 'admin123';

    if (username === correctUsername && password === correctPassword) {
      setMessage('Login Successful!');
      navigate('/options'); // Navigate to '/view' after successful login
    } else {
      setMessage('Invalid Username or Password');
    }
  };

  return (
    <div className="containerAd text-center pt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="admin-heading text-center">Admin Login</h1>

          <div className="form-group mt-3">
            <input
              type="text"
              id="username"
              className="form-controlP bg-secondary mb-3 placeholder-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <input
              type="password"
              id="password"
              className="form-controlP bg-secondary mt-4 placeholder-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <button
            onClick={handleLogin}
            className="btn btn-primary btn-block mt-4"
            style={{ backgroundColor: 'rgba(0, 123, 255, 0.2)' }}
          >
            Login
          </button>
          {message && (
            <div
              className={`mt-3 alert ${
                message === 'Login Successful!' ? 'alert-success' : 'alert-danger'
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
