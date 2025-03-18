import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="website-navbar">
      <div className="website-navbar-brand">
        <Link to="/">FlexiEmail</Link>
      </div>
      <div className="website-navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar; 