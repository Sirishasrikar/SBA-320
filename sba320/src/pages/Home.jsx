// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <nav className="sticky-nav">
                <Link to="/books">Books</Link>
                <Link to="/jokes">Jokes</Link>
                <Link to="/trivia">Trivia</Link>
            </nav>
            <h1>Welcome to Book World!</h1>
            <p>Explore different sections to find books, jokes, and trivia.</p>
            
            <section>
                <h2>Books Section</h2>
                <p>Find your favorite books, read their descriptions, and purchase them online.</p>
                <Link to="/books">Explore Books</Link>
            </section>
            
            <section>
                <h2>Jokes Section</h2>
                <p>Need a good laugh? Check out our collection of jokes from various sources.</p>
                <Link to="/jokes">Explore Jokes</Link>
            </section>
            
            <section>
                <h2>Trivia Section</h2>
                <p>Test your knowledge with interesting trivia facts from various categories.</p>
                <Link to="/trivia">Explore Trivia</Link>
            </section>
        </div>
    );
}

export default Home;
