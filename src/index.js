import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure this file exists and contains your global styles
import App from './App';
import reportWebVitals from './reportWebVitals'; // Ensure this file exists and is correctly set up

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

// Optional: Measure performance, if `reportWebVitals` is configured
reportWebVitals(console.log); // You can replace `console.log` with a custom function to log metrics
