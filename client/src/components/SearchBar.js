import React, {useState} from 'react';
import "./SearchBar.css";
import Modal from "./Modal"

function SearchBar({ placeholder, data}) {
  const [isOpen, setIsOpen]= useState(false);

  function submit(query) {
    fetch('/getsong?search='+query)
  .then(response => response.json())
  .then(data => {console.log(data);
     setIsOpen(true)}).catch((err) => setIsOpen(true));

  }

  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onKeyDown={(e) => {
              if(e.code == "Enter" ) {
                let term = encodeURIComponent(e.target.value).replace(/%20/g, "+");
                submit(term);
                
              }
            }}/>

            <div className='"searchIcon"'></div>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar