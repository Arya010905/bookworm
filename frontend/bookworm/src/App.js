import React from 'react';
import './App.css';
import BookCard from './components/BookCard';
import profilelogo from './images/profilelogo.png';
import Profile from './components/Profile';
import { Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';

const App = () => {
  return (
    <div className="app-container">
      <div className="App-header">Bookworm</div>

      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <BookList />
              <Link to="/profile" className="profile-logo">
                <img src={profilelogo} alt="Profile" />
              </Link>
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
