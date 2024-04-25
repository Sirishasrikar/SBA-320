// TriviaPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TriviaSection from '../components/FactSection'; // Import TriviaSection component

const TriviaPage = () => {
    return (
        <div>
            <div className="container">
            <nav>
                <Link to="/books">Books</Link>
                <Link to="/jokes">Jokes</Link>
                <Link to="/trivia">Trivia</Link>
            </nav>
            <h1>Trivia Page</h1>
            <TriviaSection /> {/* Render the TriviaSection component */}
        </div>
        </div>
    );
};

export default TriviaPage;
