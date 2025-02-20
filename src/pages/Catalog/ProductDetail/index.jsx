import clsx from 'clsx'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import ReviewForm from '../../../components/ReviewForm'
import ReviewList from '../../../components/ReviewList'
import Spinner from '../../../components/Spinner'
import { addProduct } from '../../../redux/slices/cartSlice'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
	const [product, setProduct] = React.useState()
	const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	React.useEffect(() => {
		const fetchProduct = async () => {
			try {
				fetch('http://localhost:3000/products/' + id)
					.then(res => {
						return res.json()
					})
					.then(data => {
						setProduct(data)
					})
			} catch (error) {
				navigate('catalog')
			}
		}
		fetchProduct()
	}, [])

	if (!product) {
		return (
			<div className='container'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Spinner />
				</div>
			</div>
		)
	}
	return (
		<div className='container'>
			<div className={styles.block}>
				<div className={styles.wrapper}>
					<img src={product.image} alt='' />
					<div className={styles.content}>
						<div className={styles.contentTop}>
							<div>
								<h4 className={styles.title}>{product.name}</h4>
								<Rating size={20} readonly initialValue={product.rating} />
								<span>({product.reviews.length})</span>
							</div>
							<span className={styles.price}>{product.price}$</span>
						</div>
						{product.isInStock ? (
							<span className={styles.available}>Available</span>
						) : (
							<span className={styles.inavailable}>Not available</span>
						)}

						<p>{product.description}</p>

						<button
							disabled={!product.isInStock}
							onClick={() => dispatch(addProduct(product))}
							className={clsx(styles.cartBtn, {
								[styles.btnDisabled]: !product.isInStock,
							})}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
			<ReviewForm productId={id} />
			{product.reviews.length > 0 ? (
				<ReviewList product={product} />
			) : (
				<p
					style={{
						textAlign: 'center',
						marginTop: '50px',
						fontFamily: 'Nunito',
						fontSize: '22px',
						opacity: '0.7',
					}}
				>
					There are no reviews yet
				</p>
			)}
		</div>
	)
}

export default ProductDetail
