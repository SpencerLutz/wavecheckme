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
      <h1>WaveCheckme</h1>
      <SearchBar placeholder="Enter a song" />
      <p>{data}</p>
    </div>
  );
}
 
export default Homepage;
