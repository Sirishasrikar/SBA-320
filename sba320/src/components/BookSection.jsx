// BookSection.jsx
import React, { useState, useEffect } from 'react';


function BookSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            fetchBooks();
        }
    }, [searchQuery]);

    const fetchBooks = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
            const data = await response.json();
            setBooks(data.items);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBookSelect = (e) => {
        const selectedBookId = e.target.value;
        const book = books.find((b) => b.id === selectedBookId);
        setSelectedBook(book);
    };

    return (
        <div className="section">
            <h2>Books</h2>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search for books..."
                style={{ marginBottom: '10px' }}
            />
            <select onChange={handleBookSelect} style={{ marginBottom: '10px' }}>
                <option value="">Select a book</option>
                {books.map((book) => (
                    <option key={book.id} value={book.id}>{book.volumeInfo.title}</option>
                ))}
            </select>
            {selectedBook && (
                <div>
                    <h3>{selectedBook.volumeInfo.title}</h3>
                    {selectedBook.volumeInfo.imageLinks && (
                        <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.volumeInfo.title} style={{ marginBottom: '10px' }} />
                    )}
                    <p>{selectedBook.volumeInfo.description}</p>
                    {/* Add more book details as needed */}
                    {selectedBook.saleInfo && selectedBook.saleInfo.buyLink && (
                        <div>
                            <p>Buy this book:</p>
                            <a href={selectedBook.saleInfo.buyLink} target="_blank" rel="noopener noreferrer">Buy Now</a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default BookSection;
