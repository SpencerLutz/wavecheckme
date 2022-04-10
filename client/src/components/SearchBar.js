import React from 'react';
import "./SearchBar.css";

function SearchBar({placeholder}) {

  async function submit(query) {
    const responses = await fetch('/getsong?search='+query)
  .then(response => response.json());
    return responses;
  }

  return (
    <div className="search">
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onKeyDown={(e) => {
              if(e.code == "Enter") {
                document.getElementById("test").innerHTML = "HERE";
                let term = e.target.value;//encodeURIComponent(e.target.value).replace(/%20/g, "+");
                submit(term).then(data => {
                  console.log(data.results[0]["previewUrl"]); // JSON data parsed by `data.json()` call
                  var audio = new Audio(data.results[0]["previewUrl"]);
                  audio.play();
                });
              }
            }}/>

            <div className='"searchIcon"'></div>
        </div>
        
        <div className="dataResult"></div>
    </div>
  )
}

export default SearchBar