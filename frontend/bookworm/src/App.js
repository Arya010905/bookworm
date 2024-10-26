import React from 'react';
import './App.css';
import BookCard from './components/BookCard';
import profilelogo from './images/profilelogo.png';
import Profile from './components/Profile';
import { Route, Routes, Link } from 'react-router-dom';

const App = () => {
  const book = {
    cover: 'https://example.com/path/to/cover.jpg', // Replace with your cover image URL
    title: 'The Great Book',
    author: 'John Doe',
    summary: 'This is a brief summary of the book.',
  };

  return (
    <div className="app-container">
      <div className="App-header">Bookworm</div>

      {/* Routes for different pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <BookCard cover={book.cover} title={book.title} author={book.author} summary={book.summary} />
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
