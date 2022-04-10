const path = require('path');
const express = require("express");
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getsong", (req, res) => {
  search = req.query.search;
  axios.get("https://itunes.apple.com/search?term="+search)
      .then((resp) => resp.json())
      .then((data) => res.send(data));
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});