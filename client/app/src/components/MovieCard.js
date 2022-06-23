import React, { useContext, useEffect } from "react";
import { MovieContext } from "../MovieContent.js";

const MovieCard = ({ movie }) => {
  const { values, setters } = useContext(MovieContext);

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
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

  }, [values.titleToRemove])

  return (
    <div>
      <h1>{movie.title}</h1>
      <button onClick={() => {
        setters.setTitleToRemove(movie.title);
        window.location.reload(false);
      }}>
        Remove
      </button>
    </div>
  );
}

export default MovieCard;