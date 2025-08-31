// Main App component rendering the CompeteDS landing page

import React, { useState, useEffect } from "react"; // React library and hooks
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

// Mock competition data
const mockCompetitions = [
  {
    id: 1,
    title: "Titanic Survival Prediction",
    deadline: "2024-03-15",
    link: "https://kaggle.com/titanic",
    platform: "Kaggle",
    region: "Global"
  },
  {
    id: 2,
    title: "House Prices Advanced Regression",
    deadline: "2024-04-01",
    link: "https://kaggle.com/house-prices",
    platform: "Kaggle",
    region: "Global"
  },
  {
    id: 3,
    title: "Predicting Disease Spread",
    deadline: "2024-03-25",
    link: "https://drivendata.org/disease",
    platform: "DrivenData",
    region: "Global"
  },
  {
    id: 4,
    title: "Climate Change Impact Prediction",
    deadline: "2024-04-10",
    link: "https://drivendata.org/climate",
    platform: "DrivenData",
    region: "Global"
  },
  {
    id: 5,
    title: "Financial Inclusion Challenge",
    deadline: "2024-03-30",
    link: "https://zindi.africa/financial",
    platform: "Zindi",
    region: "Global"
  },
  {
    id: 6,
    title: "India AI Challenge",
    deadline: "2024-04-15",
    link: "https://example.com/india-ai",
    platform: "Local",
    region: "India"
  },
  {
    id: 7,
    title: "US Healthcare Analytics",
    deadline: "2024-04-20",
    link: "https://example.com/us-healthcare",
    platform: "Local",
    region: "USA"
  },
  {
    id: 8,
    title: "European Energy Optimization",
    deadline: "2024-05-01",
    link: "https://example.com/eu-energy",
    platform: "Local",
    region: "Europe"
  }
];

// Competition Card Component
function CompetitionCard({ competition, isBookmarked, onBookmark, notes, onNotesChange }) {
  const [localNotes, setLocalNotes] = useState(notes || "");
  const [showNotes, setShowNotes] = useState(false);

  const handleNotesSubmit = () => {
    onNotesChange(competition.id, localNotes);
    setShowNotes(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = getDaysLeft(competition.deadline);

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card competition-card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{competition.title}</h5>
          <p className="card-text">
            <strong>Platform:</strong> {competition.platform}<br />
            <strong>Region:</strong> {competition.region}<br />
            <strong>Deadline:</strong> {formatDate(competition.deadline)}
          </p>
          <div className="deadline-badge mb-2">
            <span className={`badge ${daysLeft <= 7 ? 'bg-danger' : daysLeft <= 14 ? 'bg-warning' : 'bg-success'}`}>
              {daysLeft > 0 ? `${daysLeft} days left` : 'Expired'}
            </span>
          </div>
          <div className="mt-auto">
            <div className="d-flex gap-2 mb-2">
              <a href={competition.link} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm flex-grow-1">
                View Competition
              </a>
              <button
                className={`btn btn-sm ${isBookmarked ? 'btn-warning' : 'btn-outline-warning'}`}
                onClick={() => onBookmark(competition.id)}
                title="Bookmark"
              >
                ⭐
              </button>
            </div>
            <button
              className="btn btn-outline-info btn-sm w-100"
              onClick={() => setShowNotes(!showNotes)}
            >
              📝 {showNotes ? 'Hide Notes' : 'Add Notes'}
            </button>
            {showNotes && (
              <div className="mt-2">
                <textarea
                  className="form-control mb-2"
                  rows="3"
                  value={localNotes}
                  onChange={(e) => setLocalNotes(e.target.value)}
                  placeholder="Add your notes about this competition..."
                />
                <div className="d-flex gap-2">
                  <button className="btn btn-success btn-sm" onClick={handleNotesSubmit}>
                    Save Notes
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setShowNotes(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {notes && !showNotes && (
              <div className="mt-2">
                <small className="text-muted">
                  <strong>Notes:</strong> {notes.length > 50 ? notes.substring(0, 50) + '...' : notes}
                </small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Filter Component
function FilterSection({ filters, onFilterChange }) {
  return (
    <div className="filter-section bg-light p-4 rounded mb-4">
      <h4 className="mb-3">Filter Competitions</h4>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="region" className="form-label">Region</label>
          <select
            id="region"
            className="form-select"
            value={filters.region}
            onChange={(e) => onFilterChange('region', e.target.value)}
          >
            <option value="">All Regions</option>
            <option value="Global">Global</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
        {filters.region === 'Global' && (
          <div className="col-md-4 mb-3">
            <label htmlFor="platform" className="form-label">Platform</label>
            <select
              id="platform"
              className="form-select"
              value={filters.platform}
              onChange={(e) => onFilterChange('platform', e.target.value)}
            >
              <option value="">All Platforms</option>
              <option value="Kaggle">Kaggle</option>
              <option value="DrivenData">DrivenData</option>
              <option value="Zindi">Zindi</option>
            </select>
          </div>
        )}
        <div className="col-md-4 mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="ending-soon">Ending Soon (≤7 days)</option>
          </select>
        </div>
      </div>
      {(filters.region || filters.platform || filters.status) && (
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onFilterChange('clear', '')}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}

// Bookmarks Page Component
function BookmarksPage({ bookmarks, competitions, notes, onRemoveBookmark, onNotesChange, darkMode }) {
  const bookmarkedCompetitions = competitions.filter(comp => bookmarks.includes(comp.id));

  if (bookmarkedCompetitions.length === 0) {
    return (
      <div className="container mt-4">
        <h2 className="text-center fw-bold mb-4">My Bookmarks</h2>
        <div className="text-center">
          <p className="fs-5 text-muted">No bookmarked competitions yet.</p>
          <p>Bookmark competitions to keep track of them here!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold mb-4">My Bookmarks</h2>
      <div className="row">
        {bookmarkedCompetitions.map(competition => (
          <div key={competition.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{competition.title}</h5>
                <p className="card-text">
                  <strong>Platform:</strong> {competition.platform}<br />
                  <strong>Region:</strong> {competition.region}<br />
                  <strong>Deadline:</strong> {new Date(competition.deadline).toLocaleDateString()}
                </p>
                <div className="mt-auto">
                  <div className="d-flex gap-2 mb-2">
                    <a href={competition.link} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
                      View Competition
                    </a>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onRemoveBookmark(competition.id)}
                      title="Remove Bookmark"
                    >
                      🗑️
                    </button>
                  </div>
                  {notes[competition.id] && (
                    <div className="notes-display p-2 bg-light rounded">
                      <small>
                        <strong>My Notes:</strong><br />
                        {notes[competition.id]}
                      </small>
                      <button
                        className="btn btn-sm btn-outline-secondary mt-1 w-100"
                        onClick={() => {
                          const newNotes = prompt('Edit your notes:', notes[competition.id]);
                          if (newNotes !== null) {
                            onNotesChange(competition.id, newNotes);
                          }
                        }}
                      >
                        Edit Notes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main functional component
function App() {
  // Track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);
  // State for showing the scroll-to-top button
  const [showScroll, setShowScroll] = useState(false);
  // Current page state
  const [currentPage, setCurrentPage] = useState('home');
  // Filter state
  const [filters, setFilters] = useState({
    region: '',
    platform: '',
    status: ''
  });
  // Bookmarks state - stored in localStorage
  const [bookmarks, setBookmarks] = useState([]);
  // Notes state - stored in localStorage
  const [notes, setNotes] = useState({});

  // Load bookmarks and notes from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('competeds-bookmarks');
    const savedNotes = localStorage.getItem('competeds-notes');
    
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
    
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save bookmarks to localStorage when bookmarks change
  useEffect(() => {
    localStorage.setItem('competeds-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Save notes to localStorage when notes change
  useEffect(() => {
    localStorage.setItem('competeds-notes', JSON.stringify(notes));
  }, [notes]);

  // Add scroll listener to display button when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter competitions based on current filters
  const getFilteredCompetitions = () => {
    let filtered = mockCompetitions;

    if (filters.region) {
      filtered = filtered.filter(comp => comp.region === filters.region);
    }

    if (filters.platform) {
      filtered = filtered.filter(comp => comp.platform === filters.platform);
    }

    if (filters.status === 'active') {
      const today = new Date();
      filtered = filtered.filter(comp => new Date(comp.deadline) > today);
    } else if (filters.status === 'ending-soon') {
      const today = new Date();
      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      filtered = filtered.filter(comp => {
        const deadline = new Date(comp.deadline);
        return deadline > today && deadline <= weekFromNow;
      });
    }

    return filtered;
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({ region: '', platform: '', status: '' });
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value,
        // Clear platform filter if region changes from Global
        ...(filterType === 'region' && value !== 'Global' ? { platform: '' } : {})
      }));
    }
  };

  // Handle bookmarking
  const handleBookmark = (competitionId) => {
    setBookmarks(prev => {
      if (prev.includes(competitionId)) {
        return prev.filter(id => id !== competitionId);
      } else {
        return [...prev, competitionId];
      }
    });
  };

  // Handle removing bookmark
  const handleRemoveBookmark = (competitionId) => {
    setBookmarks(prev => prev.filter(id => id !== competitionId));
  };

  // Handle notes changes
  const handleNotesChange = (competitionId, noteText) => {
    setNotes(prev => ({
      ...prev,
      [competitionId]: noteText
    }));
  };

  // Navigate to different pages
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render different pages based on current page
  if (currentPage === 'bookmarks') {
    return (
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">
            <button className="navbar-brand fw-bold text-success btn btn-link" onClick={() => navigateTo('home')}>
              CompeteDS
            </button>
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
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => navigateTo('home')}>Home</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => navigateTo('competitions')}>Competitions</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link active" onClick={() => navigateTo('bookmarks')}>
                    Bookmarks {bookmarks.length > 0 && <span className="badge bg-success">{bookmarks.length}</span>}
                  </button>
                </li>
              </ul>
              <button
                className="btn btn-outline-success ms-3"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </nav>

        <BookmarksPage 
          bookmarks={bookmarks}
          competitions={mockCompetitions}
          notes={notes}
          onRemoveBookmark={handleRemoveBookmark}
          onNotesChange={handleNotesChange}
          darkMode={darkMode}
        />
      </div>
    );
  }

  // JSX that defines the page structure
  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <button className="navbar-brand fw-bold text-success btn btn-link" onClick={() => navigateTo('home')}>
            CompeteDS
          </button>
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
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentPage === 'home' ? 'active' : ''}`} 
                  onClick={() => navigateTo('home')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link btn btn-link ${currentPage === 'competitions' ? 'active' : ''}`} 
                  onClick={() => navigateTo('competitions')}
                >
                  Competitions
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link" 
                  onClick={() => navigateTo('bookmarks')}
                >
                  Bookmarks {bookmarks.length > 0 && <span className="badge bg-success">{bookmarks.length}</span>}
                </button>
              </li>
            </ul>
            <button
              className="btn btn-outline-success ms-3"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1 className="display-4 fw-bold text-success">Welcome to Vishesh!</h1>
        <p className="fs-5 text-muted">Your one-stop platform for all things Data Science.</p>
        <button className="cta-button" onClick={() => navigateTo('competitions')}>
          Explore Competitions
        </button>
      </div>

      {/* Competitions Section */}
      <section className="competitions-section container mt-5">
        <FilterSection filters={filters} onFilterChange={handleFilterChange} />
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Active Competitions</h2>
          <span className="badge bg-info">{getFilteredCompetitions().length} competitions</span>
        </div>
        
        <div className="row">
          {getFilteredCompetitions().map(competition => (
            <CompetitionCard
              key={competition.id}
              competition={competition}
              isBookmarked={bookmarks.includes(competition.id)}
              onBookmark={handleBookmark}
              notes={notes[competition.id]}
              onNotesChange={handleNotesChange}
            />
          ))}
        </div>

        {getFilteredCompetitions().length === 0 && (
          <div className="text-center py-5">
            <p className="fs-5 text-muted">No competitions match your current filters.</p>
            <button 
              className="btn btn-outline-secondary"
              onClick={() => handleFilterChange('clear', '')}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {currentPage === 'home' && (
        <>
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
        </>
      )}

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
