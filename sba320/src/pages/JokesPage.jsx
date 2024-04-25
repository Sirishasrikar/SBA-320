// JokesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import JokeSection from '../components/JokeSection'; // Import JokeSection component

const JokesPage = () => {
    return (
        <div>
            <div className="container">
            <nav>
                <Link to="/books">Books</Link>
                <Link to="/jokes">Jokes</Link>
                <Link to="/trivia">Trivia</Link>
            </nav>
            <h1>Jokes Page</h1>
            <JokeSection /> {/* Render the JokeSection component */}
        </div>
        </div>
    );
};

export default JokesPage;
