import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; 
import { useNavigate } from 'react-router-dom'; 
import backk from '../assets/backk.png';
import { RegistrationContext } from "../context/RegistrationContext"; // Import the context

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate
  const { registrationDetails } = useContext(RegistrationContext);

  // Set formData to the registration details once the component mounts
  useEffect(() => {
    setFormData({
      email: registrationDetails.email || '',
      password: registrationDetails.password || ''
    });
  }, [registrationDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim the values to avoid any leading/trailing spaces
    const email = formData.email.trim();
    const password = formData.password.trim();

    // Check if the email and password entered match the registered details
    if (email === registrationDetails.email && password === registrationDetails.password) {
      navigate('/instructions'); // Redirect to the instructions page
    } else {
      alert('Email or password is incorrect'); // Show an error message if they don't match
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center"
         style={{ backgroundImage: `url(${backk})` }}>
      <div className="login-form card shadow-lg p-4">
        <h2 className="head2 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            Hello {registrationDetails.name}<br />
            <label className="fw-bold">Email:</label>
            <input
              type="email"
              className="form-controlL"
              name="email"
              value={formData.email} // Controlled input with actual registrationDetails email
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="fw-bold">Password:</label>
            <input
              type="password"
              className="form-controlL"
              name="password"
              value={formData.password} // Controlled input with actual registrationDetails password
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button">Login</button>
        </form>

        <div className="mt-3 text-center fw-bold">
          Don't have an account?
          <a href="/user"> Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
