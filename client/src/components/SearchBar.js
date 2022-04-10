import React, {useState} from 'react';
import "./SearchBar.css";
import Modal from "./Modal"

function SearchBar({placeholder}) {
  const [isOpen, setIsOpen]= useState(false);

  async function submit(query) {
    const responses = await fetch('/getsong?search='+query)
  .then(response => response.json());
    setIsOpen(true);
    return responses;
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onKeyDown={(e) => {
          if(e.code == "Enter") {
            let term = e.target.value;//encodeURIComponent(e.target.value).replace(/%20/g, "+");
            submit(term).then(data => {
              console.log(data.results[0]["previewUrl"]); // JSON data parsed by `data.json()` call
              var audio = new Audio(data.results[0]["previewUrl"]);
              audio.play();
            });
          }
        }}/>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default SearchBar