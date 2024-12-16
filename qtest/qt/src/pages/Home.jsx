import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css'; // Import CSS file for styling
import adminImage from '../assets/admin.jpg';
import userImage from '../assets/user.jpg';
import background from '../assets/back.png';
import quest from '../assets/quest.jpg';
import 'animate.css';

export default function Home() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="logo-container">
        <img
          src={quest}
          alt="quest"
          className="questImg animate__animated animate__heartBeat"
        />
        <h1 className="head1">Quest Informatics</h1>
      </div>

      <div className="image-container">
        {/* Navigate to /profile when Admin image is clicked */}
        <div className="image-box" onClick={() => navigate('/profile')}>
          <img
            src={adminImage}
            alt="Admin"
            className="side-image left animate__animated animate__pulse"
          />
          <h2 className="head2">Admin</h2>
        </div>
        
        {/* Navigate to /user when User image is clicked */}
        <div className="image-box" onClick={() => navigate('/login')}>
          <img
            src={userImage}
            alt="User"
            className="side-image right animate__animated animate__pulse"
          />
          <h2 className="head2">User</h2>
        </div>
      </div>
    </div>
  );
}
