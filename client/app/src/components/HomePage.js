import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../MovieContent.js';
import MovieCard from './MovieCard.js';

const HomePage = () => {
  // const { values, setters } = useContext(MovieContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/all')
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  return (
    <>
      {movies.map((movie, index) => (<MovieCard key={index} movie={movie} />))}
    </>
  );
}

export default HomePage;