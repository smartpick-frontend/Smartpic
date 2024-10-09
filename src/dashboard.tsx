// src/Dashboard.tsx
import React from 'react';

interface DashboardProps {
  user: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {user}!</p>
      <button onClick={onLogout}>Logout</button>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
