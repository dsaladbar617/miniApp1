import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../MovieContent.js";

const MovieCard = ({ movie }) => {
  const { values, setters } = useContext(MovieContext);
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    if (values.titleToRemove !== '') {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "title": values.titleToRemove
      });

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/all", requestOptions)
        .then(response => response.text())
        .then(result => setters.setTitleToRemove(''))
        .catch(error => console.log('error', error));
    }

  }, [values.titleToRemove])

  useEffect(() => {
    if (values.titleWatched !== '') {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "title": values.titleWatched
      });

      var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/all", requestOptions)
        .then(response => response.text())
        .then(result => setters.setTitleWatched(''))
        .catch(error => console.log('error', error));
    }
  }, [values.titleWatched])

  return (
    <div className='center'>
      <h1>{movie.title}</h1>
      <div className='buttons'>
        <button onClick={() => {
          setters.setTitleToRemove(movie.title);
          window.location.reload(false);
        }}>
          Remove
        </button>
        <button onClick={() => { setters.setTitleWatched(movie.title) }}>Watched</button>
      </div>
    </div>
  );
}

export default MovieCard;