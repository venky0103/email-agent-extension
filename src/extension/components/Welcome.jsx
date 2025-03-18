import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/extension.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Open the website in a new tab
    window.open('http://localhost:5173', '_blank');
  };

  return (
    <div className="extension-container">
      <div className="extension-content">
        <div className="extension-welcome-content">
          <h1>Welcome to FlexiEmail</h1>
          <p className="extension-welcome-description">
            Your personal AI-powered email assistant that helps you manage and organize your emails efficiently.
          </p>
          <div className="extension-features-list">
            <div className="extension-feature-item">
              <span className="extension-feature-icon">📧</span>
              <span>Smart email organization</span>
            </div>
            <div className="extension-feature-item">
              <span className="extension-feature-icon">🤖</span>
              <span>AI-powered email insights</span>
            </div>
            <div className="extension-feature-item">
              <span className="extension-feature-icon">⚡</span>
              <span>Quick email actions</span>
            </div>
          </div>
          <button 
            className="extension-button extension-button-primary mt-4"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 