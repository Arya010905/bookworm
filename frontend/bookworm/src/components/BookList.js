import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import booksData from './bookworm_dataset.json'; // Adjust the path as necessary

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [currentBookIndex, setCurrentBookIndex] = useState(0);

    useEffect(() => {
        setBooks(booksData);
    }, []);

    const switchBook = () => {
        setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length); // Move to the next book
    };

    // Ensure books are loaded before accessing them
    const currentBook = books[currentBookIndex];

    return (
        <>
            {currentBook && (
                <BookCard
                    cover={currentBook.cover}
                    title={currentBook.title}
                    author={currentBook.authors} // Use authors field from JSON
                    summary={currentBook.summary}
                    onSwitch={switchBook} // Pass the switch function
                />
            )}
        </>
    );
};

export default BookList;
