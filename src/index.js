import React from 'react'; // Core React library
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering
import './index.css'; // Global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance reporting
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

// Create the React root element
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
