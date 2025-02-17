import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardCatalog.module.scss'

const CardCatalog = ({ id, image, name, price, isInStock }) => {
	return (
		<div className={styles.cardCatalog}>
			<Link to={`/catalog/${id}`}>
				<img className={styles.cardImg} src={image} alt='' />
			</Link>
			<div className={styles.content}>
				<Link to={`/catalog/${id}`}>
					<h4 className={styles.title}>{name}</h4>
				</Link>
				<p className={styles.price}>{price}$</p>
				<p className={isInStock ? styles.available : ''}>In Stock</p>
				<button className={styles.button}>Add to cart</button>
			</div>
		</div>
	)
}

export default CardCatalog
