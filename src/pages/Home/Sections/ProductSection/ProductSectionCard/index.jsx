import React from 'react'
import styles from './ProductSectionCard.module.scss'

const ProductSectionCard = ({ image, price, name }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={name} />
			<div>
				<p>{price} $</p>
				<h4>{name}</h4>
			</div>
		</div>
	)
}

export default ProductSectionCard
