import React from 'react'

import OfferCard from './OfferCard'
import styles from './OfferSection.module.scss'

const OfferSection = () => {
	const [offers, setOffers] = React.useState([])

	React.useEffect(() => {
		fetch('http://localhost:3000/products')
			.then(res => {
				return res.json()
			})
			.then(data => {
				const lastProducts = data.slice(-3)
				setOffers(lastProducts)
			})
	}, [])

	return (
		<section className={styles.offers}>
			<h3 className={styles.title}>Offers</h3>
			<div>
				{offers.length > 0 &&
					offers.map(obj => <OfferCard key={obj.id} {...obj} />)}
			</div>
		</section>
	)
}

export default OfferSection
