// src/Dashboard.tsx
import React from 'react';
import Navbar from './navbar'; 

interface DashboardProps {
  user: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <Navbar /> {/* Add the Navbar here */}
      <h2>Dashboard</h2>
      <p>Welcome, {user}!</p>
      <button onClick={onLogout}>Logout</button>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
