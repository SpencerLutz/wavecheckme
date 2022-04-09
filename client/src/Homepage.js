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
<<<<<<< HEAD

        <header>
          <SearchBar placeholder="Enter a song" />
        </header>
=======
        <SearchBar placeholder="Enter a song" />
      <p>{data}</p>
>>>>>>> 0b79f0ce08c142e933e7fd2c8c2990ef1c5f8dfb
    </div>
  );
}
 
export default Homepage;
