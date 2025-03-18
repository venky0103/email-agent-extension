import React from 'react';

const Dashboard = () => {
  return (
    <div className="website-dashboard-container">
      <h1>Dashboard</h1>
      <div className="website-dashboard-content">
        <div className="website-dashboard-card">
          <h2>Email Overview</h2>
          <p>Your email statistics will appear here</p>
        </div>
        <div className="website-dashboard-card">
          <h2>Recent Activity</h2>
          <p>Your recent email activities will appear here</p>
        </div>
        <div className="website-dashboard-card">
          <h2>Quick Actions</h2>
          <p>Common actions will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 