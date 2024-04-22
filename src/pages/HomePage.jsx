import React from 'react'
import styles from './HomePage.module.css'
import smoothieImage from '../assets/images/smoothie.jpg'

const HomePage = () => {
  return (
	<div className={`${styles.home_content_container}`}>
    <section className={`${styles.intro_container}`}>
      <h1>Welcome to the imaginary smoothie bar</h1>
      <p>
        Where creativity meets
        refreshment! Dive into a world of flavorful blends crafted from the
        freshest fruits and wholesome ingredients. Our menu boasts a variety
        of imaginative concoctions, from classic favorites to unique
        combinations that will tantalize your taste buds. Join us at
        "Imaginary Smoothie Bar" and embark on a flavorful journey that
        celebrates the endless possibilities of nature's bounty!
      </p>
    </section>
    <section className={`${styles.home_image_container}`}>
      <img src={smoothieImage} alt="Main page image" />
    </section>
  </div>
  )
}

export default HomePage