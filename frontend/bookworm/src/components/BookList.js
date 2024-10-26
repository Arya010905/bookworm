import React, { useState } from 'react';
import BookCard from './BookCard';

const books = [
    { cover: 'cover1.jpg', title: 'Book 1', author: 'Author 1', summary: 'Summary 1' },
    { cover: 'cover2.jpg', title: 'Book 2', author: 'Author 2', summary: 'Summary 2' },
    { cover: 'cover3.jpg', title: 'Book 3', author: 'Author 3', summary: 'Summary 3' },
    // Add more books here...
];

const BookList = () => {
    const [currentBookIndex, setCurrentBookIndex] = useState(0);

    const switchBook = () => {
        setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length); // Move to the next book
    };

    const currentBook = books[currentBookIndex];

    return (
        <BookCard
            cover={currentBook.cover}
            title={currentBook.title}
            author={currentBook.author}
            summary={currentBook.summary}
            onSwitch={switchBook} // Ensure this is passed correctly
        />
    );
};

export default BookList;
