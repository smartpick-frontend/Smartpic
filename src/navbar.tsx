import React from 'react';
import { FaHome, FaUser, FaBook, FaCheckCircle, FaPhone } from 'react-icons/fa';
import './navbar.css';   

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="logoImage" />
        <span className="logoText">Smart Pick</span>
      </div>
      <ul className="navList">
        <li className="navItem"><FaHome className='dashboard-item'/> Dashboard</li>
        <li className="navItem"><FaUser className='parents-item'/> Parents</li>
        <li className="navItem"><FaBook className='teacher-item'/> Teacher</li>
        <li className="navItem"><FaCheckCircle className='permission-item'/> Permission</li>
        <li className="navItem"><FaPhone className="phone-icon" /> Emergency Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
