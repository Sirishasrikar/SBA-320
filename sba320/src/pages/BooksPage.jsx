// BooksPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookSection from '../components/BookSection'; // Import BookSection component
import '../App.css'


const BooksPage = () => {
    const [selectedBook, setSelectedBook] = useState(null); // State to store selected book

    // Function to handle book selection
    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    return (
        <div>
            <div className="container">
            <nav>
                <Link to="/books">Books</Link>
                <Link to="/jokes">Jokes</Link>
                <Link to="/trivia">Trivia</Link>
            </nav>
            <h1>Books Page</h1>

            {/* Render the BookSection component with search functionality */}
            <BookSection onSelectBook={handleBookSelect} />

            {/* Display selected book information */}
            {selectedBook && (
                <div>
                    <h2>{selectedBook.title}</h2>
                    <img src={selectedBook.cover} alt="Book Cover" />
                    <p>{selectedBook.author}</p>
                    <p>{selectedBook.description}</p>
                    <a href={selectedBook.buyLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
                </div>
            )}
        </div>
        </div>
    );
};

export default BooksPage;
