// src/App.tsx
import React, { useState } from 'react';
import Login from './login/login'; 
import Dashboard from './dashboard'; 
import Navbar from './navbar'; 
import './App.css'; 

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string>('');

  const handleLogin = (email: string, password: string) => {
    setUser(email); 
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser('');
    setLoggedIn(false);
  };

  return (
    <div className="app-container">
      
      {loggedIn ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <>
        <div className="image-container">
        <img src="https://lh4.googleusercontent.com/proxy/pONrw1m5Xiw12P_9NYPAFwWJLzCwTMzVHSp74dz7LMmio2Q4rvaoZRz5T4HpfheGn8gVQEpIag " alt="Description of image" /> {/* Replace with your image path */}
      </div>
        <div className="login-container">
          
          <Login onLogin={handleLogin} />
        </div></>
      )}
    </div>
  );
};

export default App;
