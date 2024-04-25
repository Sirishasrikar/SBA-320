import React, { useState, useEffect } from 'react';

function FactSection() {
    const [trivia, setTrivia] = useState({ question: '', answer: '' });

    useEffect(() => {
        fetchTrivia();
    }, []);

    const fetchTrivia = async () => {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=1');
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const question = data.results[0].question;
                const answer = data.results[0].correct_answer;
                // Replace special HTML entities with their corresponding characters
                const decodedQuestion = decodeEntities(question);
                const decodedAnswer = decodeEntities(answer);
                setTrivia({ question: decodedQuestion, answer: decodedAnswer });
            }
        } catch (error) {
            console.error('Error fetching trivia:', error);
        }
    };

    // Function to decode HTML entities
    const decodeEntities = (str) => {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = str;
        return textarea.value;
    };

    const handleRevealAnswer = () => {
        alert(trivia.answer);
    };

    const handleRefreshTrivia = () => {
        fetchTrivia();
    };

    return (
        <div className="section">
            <h2>Trivia</h2>
            <p>{trivia.question}</p>
            <div>
                <button onClick={handleRevealAnswer}>Reveal Answer</button>
                <button onClick={handleRefreshTrivia}>Next Trivia</button>
            </div>
        </div>
    );
}

export default FactSection;
