import React, { createContext, useEffect, useState } from 'react'

const fruitsContext = createContext();

const FruitsProvider = ({children}) => {
	const [fruitsList, setFruitsList] = useState([]);

	const fetchFruits = async() => {
		try {
			const response = await fetch('http://localhost:5000/');
			const data = await response.json();
			setFruitsList(data.sort((a,b) => a.name.localeCompare(b.name))); // or: setFruitsList(data.sort((a,b) => a.name - b.name))
		} catch (error) {
			console.log(error.message);
		}
	}

	console.log(fruitsList);

	useEffect(() => {
		fetchFruits();
	}, []);

  return (
	<div>
		<fruitsContext.Provider value={{fruitsList, setFruitsList}}>
			{children}
		</fruitsContext.Provider>
	</div>
  )
}

export {FruitsProvider, fruitsContext}
