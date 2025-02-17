import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../redux/slices/cartSlice'
import styles from './CardCatalog.module.scss'
const CardCatalog = ({
	id,
	name,
	price,
	categoryId,
	brand,
	isInStock,
	image,
	description,
}) => {
	const dispatch = useDispatch()

	const handleAddToCart = () => {
		const product = {
			id,
			name,
			price,
			categoryId,
			brand,
			isInStock,
			image,
			description,
		}

		dispatch(addProduct(product))
	}

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
				<button onClick={handleAddToCart} className={styles.button}>
					Add to cart
				</button>
			</div>
		</div>
	)
}

export default CardCatalog
