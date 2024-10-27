import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import booksData from './bookworm_dataset.json'; // Adjust the path as necessary

const BookList = () => {
    const [books, setBooks] = useState([]); // Main book list
    const [recommendedBooks, setRecommendedBooks] = useState([]); // Recommended books
    const [currentBookIndex, setCurrentBookIndex] = useState(0);
    const [checkClickCount, setCheckClickCount] = useState(0);

    useEffect(() => {
        setBooks(booksData); // Load the initial dataset
    }, []);

    const handleCheckClick = () => {
        setCheckClickCount(prevCount => prevCount + 1);
        fetchRecommendations();
    };

    const fetchRecommendations = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/recommend?title=' + encodeURIComponent(books[currentBookIndex].title));
            const data = await response.json();
    
            if (data.recommendations && data.recommendations.length > 0) {
                const recommendedBooks = [];
    
                for (const title of data.recommendations) {
                    try {
                        const res = await fetch(`http://127.0.0.1:5000/book_info?title=${encodeURIComponent(title)}`);
                        if (!res.ok) {
                            console.error(`Failed to fetch book info for "${title}":`, res.status, res.statusText);
                            continue; // Skip to the next book if fetching fails
                        }
                        const bookInfo = await res.json();
                        recommendedBooks.push(bookInfo); // Collect successful book info
                    } catch (error) {
                        console.error(`Error fetching book info for "${title}":`, error);
                        continue; // Skip to the next book on error
                    }
                }
    
                if (recommendedBooks.length > 0) {
                    // Randomly select a book from the recommended list
                    const randomIndex = Math.floor(Math.random() * recommendedBooks.length);
                    setBooks(recommendedBooks);
                    setCurrentBookIndex(randomIndex); // Set to a random book index
                } else {
                    console.warn('No valid recommendations found.');
                }
            } else {
                console.warn('No recommendations received.');
            }
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    const currentBook = books[currentBookIndex];

    return (
        <>
            {currentBook && (
                <>
                    <BookCard
                        cover={currentBook.cover}
                        title={currentBook.title}
                        author={currentBook.authors} // Assuming this is an array of authors
                        summary={currentBook.summary}
                        onSwitch={fetchRecommendations} // Switch to next book
                        onCheckClick={handleCheckClick} // Pass the check click handler
                    />
                </>
            )}
        </>
    );
};

export default BookList;
