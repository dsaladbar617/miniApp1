import React, { useState } from 'react';

const MovieContext = React.createContext([]);

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ])

  const [searchParams, setSearchParams] = useState('');

  const [titleToRemove, setTitleToRemove] = useState('');
  const [titleToAdd, setTitleToAdd] = useState('');
  const [titleWatched, setTitleWatched] = useState('');

  const values = {
    movies,
    searchParams,
    titleToRemove,
    titleToAdd,
    titleWatched
  }

  const setters = {
    setMovies,
    setSearchParams,
    setTitleToRemove,
    setTitleToAdd,
    setTitleWatched
  }

  return (
    <MovieContext.Provider value={{values, setters}}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };