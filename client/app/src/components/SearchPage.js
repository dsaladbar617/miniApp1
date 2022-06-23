import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieContext } from '../MovieContent.js';
import MovieCard from './MovieCard.js';

const SearchPage = () => {
  const location = useLocation();
  const url = location.pathname;
  const {values, setters} = useContext(MovieContext);

  useEffect(() => {
    fetch(`http://localhost:8080/api/search/${values.searchParams}`)
    .then(res => res.json())
    .then(data => setters.setMovies(data))
  }, [url])

  return (
    <>
      {values.movies.map((movie, index) => (<MovieCard key={index} movie={movie} />))}
    </>
  );
}

export default SearchPage;