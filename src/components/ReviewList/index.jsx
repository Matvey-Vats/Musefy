import React from 'react'
import ReviewItem from './ReviewItem/'
import styles from './ReviewList.module.scss'

const ReviewList = ({ product }) => {
	console.log(product)

	return (
		<div className={styles.block}>
			<h3 className={styles.title}>Reviews</h3>
			<div className={styles.gridBox}>
				{product.reviews.map(item => (
					<ReviewItem key={item.id} {...item} />
				))}
			</div>
		</div>
	)
}

export default ReviewList
