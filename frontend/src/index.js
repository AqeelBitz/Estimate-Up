import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App';

const container = document.getElementById('root');

// Check if prerendered HTML exists (from react-snap)
if (container?.hasChildNodes()) {
  // Hydrate for prerendered content
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Normal render for development
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}