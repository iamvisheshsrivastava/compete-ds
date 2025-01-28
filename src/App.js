import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">CompeteDS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Competitions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1 style={{ color: "#4CAF50" }}>Welcome to CompeteDS!</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Your one-stop platform for all things Data Science.
        </p>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            color: "#fff",
            background: "#4CAF50",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => e.target.style.background = "#45A049"}
          onMouseOut={(e) => e.target.style.background = "#4CAF50"}
        >
          Explore Competitions
        </button>
      </div>
    </div>
  );
}

export default App;
