import React from 'react';
import "./SearchBar.css";
import Modal from "./Modal"

function SearchBar({placeholder, setSearchQuery}) {

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onKeyDown={(e) => {
          if(e.code == "Enter") {
            let term = encodeURIComponent(e.target.value).replace(/%20/g, "+");//encodeURIComponent(e.target.value).replace(/%20/g, "+");
            console.log(term);
            setSearchQuery(term);
          }
        }}/>
      </div>
    </div>
  )
}

export default SearchBar