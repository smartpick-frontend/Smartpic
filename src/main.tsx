// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Import the App component
import './assets/global.css'; // Import global styles

createRoot(document.getElementById('root')!).render(<App />);
