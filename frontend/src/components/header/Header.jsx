import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css'


const Header = () => {
  return (
    <Navbar className="header" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="../../../images/wvm.svg"
          width="100"
          height="100"
          alt="Logo"
        />
      </Navbar.Brand>
       
        <div className="brand-text">
          <span className="navbar-title">WaveCheck Me!</span>
          <span className="navbar-motto">
            Search for a song and we'll find you something similar.
          </span>
        </div>

    </Navbar>
  );
};


export default Header;