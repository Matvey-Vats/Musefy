import React from 'react'
import styles from './CardCatalog.module.scss'

const CardCatalog = ({ image, name, price, isInStock }) => {
	return (
		<div className={styles.cardCatalog}>
			<a href='#!'>
				<img className={styles.cardImg} src={image} alt='' />
			</a>
			<div className={styles.content}>
				<a href='#!'>
					<h4 className={styles.title}>{name}</h4>
				</a>
				<p className={styles.price}>{price}$</p>
				<p className={isInStock ? styles.available : ''}>In Stock</p>
				<button className={styles.button}>Add to cart</button>
			</div>
		</div>
	)
}

export default CardCatalog
