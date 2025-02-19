import React from 'react'
import { Rating } from 'react-simple-star-rating'
import styles from './ReviewItem.module.scss'
const ReviewItem = ({ user, rating, comment }) => {
	return (
		<div className={styles.item}>
			<div className={styles.wrapper}>
				<h5>{user}</h5>
				<Rating initialValue={rating} readonly={true} size={20} />
			</div>
			<p>{comment}</p>
		</div>
	)
}

export default ReviewItem
