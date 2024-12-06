import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+ support
import './styles/global.css'; // Import global CSS for the entire app
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
