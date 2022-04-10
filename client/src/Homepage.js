import React from 'react'
import './Homepage.css';
import SearchBar from './components/SearchBar';
import { useRef, useState } from 'react';
import Modal from "./components/Modal";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState();

  return (
    <div className="App">
      <img src="favicon_io/wvm.svg" alt=""/>
      <h1 style={{ color: 'white' }}>WaveCheck Me!</h1>
      <h1></h1><h1></h1><h1></h1> 
      <h3 style={{ color: 'white' }}>Search for a song and we'll find you something similar. </h3>
      <SearchBar placeholder="Enter a song" setSearchQuery={(q) => {
        console.log(q);
        setSearchQuery(q);
        setIsOpen(true);
      }}/>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} searchQuery={searchQuery} />}
      <h1></h1><h1></h1><h1></h1><h1></h1>
      <h5 style={{ color: 'white' }}>BitCamp 2022: Alex Dobrzycki, Alejandro Echaniz, Maia Gustafson, and Spencer Lutz</h5>
    </div>
  );
}
 
export default Homepage;
