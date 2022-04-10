import React from 'react'
import './Homepage.css';
import SearchBar from './components/SearchBar';
import { useRef, useState } from 'react';
import Modal from "./components/Modal";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <img src="favicon_io/wvm.svg" alt=""/>

      <div className={styles.title}>
            WaveCheck Me!
      </div>

      
      <h1></h1><h1></h1><h1></h1> 
      <h3 style={{ color: 'white' }}>Search for a song and we'll find you something similar. </h3>
      <SearchBar placeholder="Enter a song" />
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <h1></h1><h1></h1><h1></h1><h1></h1>
      <h5 style={{ color: 'white' }}>BitCamp 2022: Alex Dobrzycki, Alejandro Echaniz, Maia Gustafson, and Spencer Lutz</h5>
    </div>
  );
}
 
export default Homepage;
