import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import booksData from './bookworm_dataset.json'; // Adjust the path as necessary
import Stop from './Stop'


const BookList = () => {
    const [books, setBooks] = useState([]);
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [isSwitching, setIsSwitching] = useState(false);

    useEffect(() => {
        setBooks(booksData);
    }, []);

    const switchBook = () => {
        if (isSwitching) return; // Prevent switching if already in process
        setIsSwitching(true);
        const nextIndex = (currentBookIndex + 1) % books.length;
        setCurrentBookIndex(nextIndex); // Move to the next book
        setIsSwitching(false);
    };

    // Ensure books are loaded before accessing them
    const currentBook = books[currentBookIndex];
    const stopSwitching = () => {
        setIsSwitching(false);
    };

    return (
        <>
            {currentBook && (
                <> 
                <BookCard
                    cover={currentBook.cover}
                    title={currentBook.title}
                    author={currentBook.authors} // Use authors field from JSON
                    summary={currentBook.summary}
                    onSwitch={switchBook} // Pass the switch function
                />
                <Stop/>
                </>
            )}
        </>
    );
};

export default BookList;
