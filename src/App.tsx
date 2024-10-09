// src/App.tsx
import React, { useState } from 'react';
import Login from './login/login'; // Import the Login component
import Dashboard from './dashboard'; // Import the Dashboard component
import './App.css'; // Import styles for App

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');

  const handleLogin = (email: string, password: string) => {
    setUser(email); // Set user email as username
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser('');
    setLoggedIn(false);
  };

  return (
    <div className="app-container">
      <div className="image-container">
        <img src="https://lh4.googleusercontent.com/proxy/pONrw1m5Xiw12P_9NYPAFwWJLzCwTMzVHSp74dz7LMmio2Q4rvaoZRz5T4HpfheGn8gVQEpIag " alt="Description of image" /> {/* Replace with your image path */}
      </div>
      {loggedIn ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <div className="login-container">
          
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
