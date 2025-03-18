import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="website-home-container">
      <section className="website-hero">
        <h1>Welcome to FlexiEmail</h1>
        <p>Your intelligent email management solution</p>
        <div className="website-cta-buttons">
          <Link to="/signup" className="button button-primary">
            Get Started
          </Link>
          <Link to="/dashboard" className="button button-secondary">
            Go to Dashboard
          </Link>
        </div>
      </section>
      
      <section className="website-features">
        <h2>Features</h2>
        <div className="website-features-grid">
          <div className="website-feature-card">
            <h3>Smart Email Management</h3>
            <p>Organize and manage your emails efficiently</p>
          </div>
          <div className="website-feature-card">
            <h3>Chrome Extension</h3>
            <p>Access your emails directly from your browser</p>
          </div>
          <div className="website-feature-card">
            <h3>AI-Powered Insights</h3>
            <p>Get intelligent suggestions for your emails</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 