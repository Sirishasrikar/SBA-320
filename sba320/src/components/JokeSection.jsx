import React, { useState, useEffect } from 'react';

const JokeSection = () => {
  // State to store the current joke
  const [joke, setJoke] = useState('');

  // Function to fetch a random joke
  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  // Function to load a new joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  // Function to handle loading a new joke
  const handleLoadNextJoke = () => {
    fetchJoke();
  };

  return (
    <div className="section">
      <h2>Jokes</h2>
      <p>{joke}</p>
      <button onClick={handleLoadNextJoke}>Load Next Joke</button>
    </div>
  );
};

export default JokeSection;
