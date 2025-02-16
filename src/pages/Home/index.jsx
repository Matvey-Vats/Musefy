import React from 'react'
import HeroSection from './Sections/HeroSection'
import OfferSection from './Sections/OfferSection'
import ProductSection from './Sections/ProductSection'

const Home = () => {
	return (
		<div className='container'>
			<HeroSection />
			<ProductSection />
			<OfferSection />
		</div>
	)
}

export default Home
