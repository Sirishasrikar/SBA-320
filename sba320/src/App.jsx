import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BooksPage from './pages/BooksPage'; // Import BooksPage component
import JokesPage from './pages/JokesPage'; // Import JokesPage component
import TriviaPage from './pages/TriviaPage'; // Import TriviaPage component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home component for root path */}
        <Route path="/books" element={<BooksPage />} /> {/* Render BooksPage component for /books path */}
        <Route path="/jokes" element={<JokesPage />} /> {/* Render JokesPage component for /jokes path */}
        <Route path="/trivia" element={<TriviaPage />} /> {/* Render TriviaPage component for /trivia path */}
      </Routes>
    </Router>
  );
}

export default App;
