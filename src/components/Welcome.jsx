import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to your Email Agent</h1>
      <button 
        className="primary-button"
        onClick={() => navigate('/search')}
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome; 