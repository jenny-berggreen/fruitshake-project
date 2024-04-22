import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Wrapper = () => {
  return (
	<>
	<div>
		<Navbar />
	</div>
	<div>
		<Outlet />
	</div>
	
	</>
	
	
  )
}

export default Wrapper