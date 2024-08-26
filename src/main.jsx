import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
// Create the root element for rendering the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app wrapped in Router and React.StrictMode for development
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
