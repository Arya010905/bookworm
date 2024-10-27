import React from 'react';
import './App.css';
import profilelogo from './images/profilelogo.png';
import logo from './images/logo.png'; // Import your main logo
import Profile from './components/Profile';
import Signup from './components/Signup';
import { Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className="app-container">
      <div className="App-header">
        <Link to="/"> {/* Wrap the logo with a Link component */}
          <img src={logo} alt="App Logo" className="app-logo" />
        </Link>
        <h1 className="header-title"><i>bookworm</i></h1> {/* Header title */}
      </div>

      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <BookList />
              <div className="top-right-links">
                <Link to="/profile" className="profile-logo">
                  <img src={profilelogo} alt="Profile" />
                </Link>
                <Link to="/signup" className="signup-link">Sign Up</Link> {/* Sign Up link */}
              </div>
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} /> {/* Placeholder for Signup page */}
      </Routes>
    </div>
  );
};

export default App;
