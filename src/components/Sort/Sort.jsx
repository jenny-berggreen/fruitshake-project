import React, { useContext, useState } from 'react'
import { fruitsContext } from '../../context/FruitsProvider';
import styles from './Sort.module.css'

const Sort = () => {
	const {fruitsList, setFruitsList} = useContext(fruitsContext);
	const [selectedOption, setSelectedOption] = useState('all');

	console.log(fruitsList);

	const handleSortChange = (e) => {
		const selectedValue = e.target.value;
		setSelectedOption(selectedValue);

		let sortedFruits = [...fruitsList];

		switch (selectedOption) {
			case 'highest_calories':
				sortedFruits.sort((a,b) => {
					return a.nutrition.calories - b.nutrition.calories;
				})
				break;
			case 'lowest_fat':
				sortedFruits.sort((a,b) => {
					return a.nutrition.fat - b.nutrition.fat;
				})
				break;
			case 'lowest_sugar':
				sortedFruits.sort((a,b) => {
					return a.nutrition.sugar - b.nutrition.sugar;
				})
				break;
			case 'lowest_carbs':
				sortedFruits.sort((a,b) => {
					return a.nutrition.carbohydrates - b.nutrition.carbohydrates;
				})
				break;
			case 'highest_protein':
				sortedFruits.sort((a,b) => {
					return a.nutrition.protein - b.nutrition.protein;
				})
				break;
	
			default:
				sortedFruits.sort((a,b) => a.name.localeCompare(b.name));
		}

		setFruitsList(sortedFruits);

		console.log(sortedFruits);
	}

  return (
	<div className={`${styles.sort_container}`}>
		<label htmlFor="sort_options">Sort by: </label>
		<select name="sort_options" onChange={handleSortChange} value={selectedOption}>
			<option value="all">All</option>
			<option value="highest_calories">Highest calories</option>
			<option value="lowest_fat">Lowest fat</option>
			<option value="lowest_sugar">Lowest sugar</option>
			<option value="lowest_carbs">Lowest carbs</option>
			<option value="highest_protein">Highest protein</option>
		</select>
	</div>
  )
}

export default Sort