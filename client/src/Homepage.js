import React from 'react'
import './Homepage.css'
import SearchBar from './components/SearchBar'
import {useState} from 'react'
import Modal from "./components/Modal"

function Homepage() {
	const [isOpen, setIsOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState()

	return (
		<div className="App">
			<img src="images/wvm.svg" alt="" className='logoImg'/>
			<div className='titleTxt'>WaveCheck Me!</div>
			<h3 className='motto'>Search for a song and we'll find you something similar.</h3>
	  
			{/* this was the code written by the smart dude, need to look more into it to understand what's going on*/}
			<SearchBar placeholder="Enter a song" setSearchQuery={(q) => {
				setSearchQuery(q)
				setIsOpen(true)
			}}/>
	
			{isOpen && <Modal setIsOpen={setIsOpen} searchQuery={searchQuery} />}
	
			<h1></h1><h1></h1><h1></h1><h1></h1> 
			<h5 className='creditText'>BitCamp 2022: Alex Dobrzycki, Alejandro Echaniz, Maia Gustafson, and Spencer Lutz</h5>
		</div>
	)
}
 
export default Homepage
