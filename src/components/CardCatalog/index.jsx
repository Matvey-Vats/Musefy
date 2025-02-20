import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
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
	reviews,
	rating,
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
					<Rating size={20} readonly initialValue={rating} />
					<span>({reviews.length})</span>
				</Link>
				<p className={styles.price}>{price}$</p>
				<p className={isInStock ? styles.available : styles.inavailable}>
					{isInStock ? 'Available' : 'Not available'}
				</p>
				<button
					disabled={!isInStock}
					onClick={handleAddToCart}
					className={styles.button}
				>
					Add to cart
				</button>
			</div>
		</div>
	)
}

export default CardCatalog
