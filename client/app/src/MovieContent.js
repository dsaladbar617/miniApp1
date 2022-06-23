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

  const values = {
    movies,
    searchParams,
    titleToRemove,
    titleToAdd
  }

  const setters = {
    setMovies,
    setSearchParams,
    setTitleToRemove,
    setTitleToAdd
  }

  return (
    <MovieContext.Provider value={{values, setters}}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };