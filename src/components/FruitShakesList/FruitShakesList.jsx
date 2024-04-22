import React, { useState } from 'react'
import styles from './FruitShakesList.module.css'
import fruitShakesData from '../../assets/data/fruitShakesData'
import FruitShake from '../FruitShake/FruitShake'

const FruitShakesList = () => {
	const [fruitShakesDataList, setfruitShakesDataList] = useState(fruitShakesData);

  return (
	<div className={`${styles.shakesList_main_container}`}>
		<ul className={`${styles.shakesList_list_container}`}>
			{fruitShakesDataList.map(shake => {
				return <FruitShake fruitShake = {shake} key = {shake.id} />
			})}
		</ul>
	</div>
  )
}

export default FruitShakesList