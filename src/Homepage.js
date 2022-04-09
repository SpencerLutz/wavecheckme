import React from 'react'
import './Homepage.css';
import SearchBar from './components/SearchBar';

function Homepage() {
  return (
    <div className="App">
        <SearchBar />
      <h1>WaveCheckme</h1>
    </div>
  );
}
 
export default Homepage;
