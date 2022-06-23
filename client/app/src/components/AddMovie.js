import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { MovieContext } from "../MovieContent.js";

const AddMovie = () => {
  const { values, setters } = useContext(MovieContext);
  const [val, setVal] = useState('');
  const nav = useNavigate()

  useEffect(() => {
    if (values.titleToAdd !== '') {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "title": values.titleToAdd
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/all", requestOptions)
        .then(response => response.text())
        .then(result => {
          setters.setTitleToAdd('')
          nav('/')
        })

        .catch(error => console.log('error', error));
    }
  }, [values.titleToAdd])

  const handleUserInput = (e) => {
    setVal(e.target.value);

  };
  const resetInputField = () => {
    // console.log()
    setters.setTitleToAdd(val)
    // nav('/');
    setVal("");
  };

  return (
    <div>
      <input value={val} placeholder='Title' onChange={handleUserInput} />
      <button onClick={() => {resetInputField()}} >Add</button>
    </div>
  )
}

export default AddMovie;