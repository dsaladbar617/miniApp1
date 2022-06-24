import React, { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { MovieContext } from "../MovieContent.js";
import '../styles/components.css';


const Header = () => {
  const {values, setters} = useContext(MovieContext);
  const [val, setVal] = useState('');
  const nav = useNavigate()

  const handleUserInput = (e) => {
    setVal(e.target.value);
    setters.setSearchParams(e.target.value)
  };
  const resetInputField = () => {
    val ? nav(`/search/results/${values.searchParams}`) : nav('/');
    setVal("");
  };


  return (
  <div className='header'>
        <div className='right'>
          <input className='searchbar' value={val} placeholder='Search' onChange={handleUserInput}/>
          <button className='searchbutton' onClick={resetInputField} >Search</button>
          <button onClick={() => {nav('/add_movie')}}>Add Movie</button>
        </div>
      </div>
  );
}

export default Header;