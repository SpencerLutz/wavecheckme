import React from 'react';
import "./SearchBar.css";

function SearchBar({ placeholder, data}) {
  function submit(query) {
    fetch('/getsong?search='+query)
  .then(response => response.json())
  .then(data => console.log(data));

  }

  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onKeyDown={(e) => {
              if(e.code == "Enter" ) {
                submit(e.target.value)
              }
            }}/>

            <div className='"searchIcon"'></div>
        </div>
        
        <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar