import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage/Homepage';
import reportWebVitals from './reportWebVitals';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

reportWebVitals();
