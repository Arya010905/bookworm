import React, { useState } from 'react';
import BookCard from './BookCard';

const books = [
  { cover: 'cover1.jpg', title: 'Book 1', author: 'Author 1', summary: 'Summary 1' },
  { cover: 'cover2.jpg', title: 'Book 2', author: 'Author 2', summary: 'Summary 2' },
  // Add more books here...
];

const BookList = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const switchBook = (direction) => {
    setCurrentBookIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % books.length; // Loop to the beginning
      }
      return (prevIndex - 1 + books.length) % books.length; // Loop to the end
    });
  };

  const currentBook = books[currentBookIndex];

  return (
    <BookCard
      cover={currentBook.cover}
      title={currentBook.title}
      author={currentBook.author}
      summary={currentBook.summary}
      onSwitch={switchBook}
    />
  );
};

export default BookList;