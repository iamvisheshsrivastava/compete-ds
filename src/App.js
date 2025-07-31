// Main App component rendering the CompeteDS landing page

import React, { useState, useEffect } from "react"; // React library and hooks
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

// Main functional component
function App() {
  // Track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);
  // State for showing the scroll-to-top button
  const [showScroll, setShowScroll] = useState(false);

  // Add scroll listener to display button when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JSX that defines the page structure
  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">CompeteDS</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Competitions</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Community</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Statistics</a></li>
            </ul>
            <button
              className="btn btn-outline-success ms-3"
              /* Toggle between dark and light mode */
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1 className="display-4 fw-bold text-success">Welcome to CompeteDS!</h1>
        <p className="fs-5 text-muted">Your one-stop platform for all things Data Science.</p>
        <button className="cta-button">Explore Competitions</button>
      </div>

      {/* Competitions Section */}
      <section className="competitions-section container mt-5">
        <h2 className="text-center fw-bold">Active Competitions</h2>
        <ul className="list-group">
          <li className="list-group-item">Kaggle - Titanic Survival Prediction</li>
          <li className="list-group-item">DrivenData - Predicting Disease Spread</li>
          <li className="list-group-item">AI Blitz - Image Classification Challenge</li>
        </ul>
      </section>

      {/* Latest News */}
      <section className="news-section container mt-5">
        <h2 className="text-center fw-bold">Latest News</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card news-card h-100">
              <div className="card-body">
                <h5 className="card-title">Deep Learning Breakthroughs</h5>
                <p className="card-text">
                  Researchers unveil new techniques boosting model accuracy in image recognition tasks.
                </p>
                <a href="#" className="btn btn-success btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card news-card h-100">
              <div className="card-body">
                <h5 className="card-title">Kaggle Releases New Dataset</h5>
                <p className="card-text">
                  Explore the latest open-source dataset for natural language processing enthusiasts.
                </p>
                <a href="#" className="btn btn-success btn-sm">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card news-card h-100">
              <div className="card-body">
                <h5 className="card-title">Community Events</h5>
                <p className="card-text">
                  Join upcoming webinars and workshops hosted by leading data scientists around the globe.
                </p>
                <a href="#" className="btn btn-success btn-sm">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="learning-resources container mt-5">
        <h2 className="text-center fw-bold">Learning Resources</h2>
        <div className="row">
          <div className="col-md-4">
            <h4>Beginner</h4>
            <ul>
              <li><a href="#">Intro to Machine Learning</a></li>
              <li><a href="#">Python for Data Science</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Intermediate</h4>
            <ul>
              <li><a href="#">Deep Learning with TensorFlow</a></li>
              <li><a href="#">Statistical Analysis with R</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Advanced</h4>
            <ul>
              <li><a href="#">Reinforcement Learning</a></li>
              <li><a href="#">Quantum Machine Learning</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Science Community Section */}
      <section className="community-section container mt-5">
        <h2 className="text-center fw-bold">Join Our Community</h2>
        <p className="text-center">Stay connected with top data scientists, AI researchers, and industry experts.</p>
        <div className="text-center">
          <button className="btn btn-primary">Join Discord</button>
          <button className="btn btn-success ms-3">Follow on Twitter</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section container mt-5">
        <h2 className="text-center fw-bold">Get in Touch</h2>
        <form className="mt-3">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="mt-3">
            <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          </div>
          <div className="text-center mt-3">
            <button type="submit" className="btn btn-success">Send Message</button>
          </div>
        </form>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section container mt-5">
        <h2 className="text-center fw-bold">Data Science Stats</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <h3>10,000+</h3>
            <p>Active Users</p>
          </div>
          <div className="col-md-3">
            <h3>500+</h3>
            <p>Competitions Hosted</p>
          </div>
          <div className="col-md-3">
            <h3>200+</h3>
            <p>Learning Resources</p>
          </div>
          <div className="col-md-3">
            <h3>50+</h3>
            <p>Industry Partners</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center mt-5">
        <p className="m-0">© {new Date().getFullYear()} CompeteDS | All Rights Reserved</p>
      </footer>

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          className="scroll-to-top btn btn-success"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

// Export the App component for rendering
export default App;
