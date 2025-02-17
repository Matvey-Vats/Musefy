import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
	const [product, setProduct] = React.useState()
	const { id } = useParams()
	const navigate = useNavigate()

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
		return <div>LOADING...</div>
	}
	return (
		<div className='container'>
			<div className={styles.block}>
				<div className={styles.wrapper}>
					<img src={product.image} alt='' />
					<div className={styles.content}>
						<div className={styles.contentTop}>
							<h4 className={styles.title}>{product.name}</h4>
							<span className={styles.price}>{product.price}$</span>
						</div>
						{product.isInStock ? (
							<span className={styles.available}>Available</span>
						) : (
							<span className={styles.inavailable}>Not available</span>
						)}

						<p>{product.description}</p>

						<button className={styles.cartBtn}>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
