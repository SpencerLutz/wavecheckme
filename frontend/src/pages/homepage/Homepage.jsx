import React from 'react'
import {useState} from 'react'

import './Homepage.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Modal from "../../components/modal/Modal"
import SearchBar from '../../components/searchBar/SearchBar'

const Homepage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState();
  
	return (
	  <div className="App">
		<div className="content-wrapper d-flex flex-column min-vh-100">
		  <Header className="w-100" />
		  <main className="flex-grow-1 main-content d-flex align-items-center justify-content-center">
			<SearchBar
			  placeholder="Enter a song"
			  setSearchQuery={(q) => {
				setSearchQuery(q);
				setIsOpen(true);
			  }}
			/>
			{isOpen && <Modal setIsOpen={setIsOpen} searchQuery={searchQuery} />}
		  </main>
		  <Footer className="w-100" />
		</div>
	  </div>
	);
  };
 
export default Homepage
