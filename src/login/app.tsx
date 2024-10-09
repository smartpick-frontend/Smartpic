import React from 'react';
import './App.css';
import Login from './login';
import styles from './Login.module.css'; 


const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Logging in with:', { email, password });
    // Handle login logic here, e.g., API calls.
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );

  return (
    <div className={styles['login-container']}>
      {/* Login form JSX */}
    </div>
  );


};

export default App;

