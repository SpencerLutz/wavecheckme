import React from 'react'
import './Homepage.css';
import SearchBar from './components/SearchBar';


function Homepage() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);



  return (
    <div className="App">
      <img src="/wvm.jpg" alt=""/>
      <h1></h1><h1></h1><h3></h3>
      <h1 style={{ color: 'white' }}>WaveCheck Me!</h1>
      <h1></h1><h1></h1>
      <h3 style={{ color: 'white' }}>Search for a song and we'll find you something similar. </h3>
        <SearchBar placeholder="Enter a song" />
        <h1></h1><h1></h1><h1></h1><h1></h1>
        <h5 style={{ color: 'white' }}>BitCamp 2022: Alex Dobrzycki, Alejandro Echaniz, Maia Gustafson, and Spencer Lutz</h5>
      <p>{data}</p>
    </div>
  );
}
 
export default Homepage;
