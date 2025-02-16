import React from 'react'
import styles from './CardCatalog.module.scss'
import cardImg from '/guitar.jpg'

const CardCatalog = () => {
	return (
		<div className={styles.cardCatalog}>
			<a href='#!'>
				<img className={styles.cardImg} src={cardImg} alt='' />
			</a>
			<div className={styles.content}>
				<a href='#!'>
					<h4 className={styles.title}>Title</h4>
				</a>
				<p className={styles.price}>300$</p>
				<p className={styles.available}>In Stock</p>
				<button className={styles.button}>Add to cart</button>
			</div>
		</div>
	)
}

export default CardCatalog
