import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'

const MainLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
				<Footer />
			</main>
		</>
	)
}

export default MainLayout
