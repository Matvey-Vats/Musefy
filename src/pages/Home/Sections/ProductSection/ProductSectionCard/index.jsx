import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductSectionCard.module.scss'

const ProductSectionCard = ({ id, image, price, name }) => {
	return (
		<Link className={styles.wrap} to={`/catalog/${id}`}>
			<div className={styles.card}>
				<img src={image} alt={name} />
				<div>
					<p>{price} $</p>
					<h4>{name}</h4>
				</div>
			</div>
		</Link>
	)
}

export default ProductSectionCard
