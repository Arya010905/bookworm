import React from 'react';
import './App.css';
import BookCard from './components/BookCard';
import profilelogo from './images/profilelogo.png';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  const book = {
    cover: 'https://example.com/path/to/cover.jpg', // Replace with your cover image URL
    title: 'The Great Book',
    author: 'John Doe',
    summary: 'This is a brief summary of the book. It covers the main points and themes in an engaging way.'
  };

  return (
    <div className="app-container">
     <div className="App-header">Bookworm</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <BookCard cover={book.cover} title={book.title} author={book.author} summary={book.summary}/>
      </div>
      <Link to="/profile" className="profile-logo">
        <img src={profilelogo} alt="Profile" />
      </Link>
    </div>

  );
};

export default App;
