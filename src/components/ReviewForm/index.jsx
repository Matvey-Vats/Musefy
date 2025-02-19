import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import styles from './ReviewForm.module.scss'

const MAX_LENGTH = 140

import { useDispatch } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
import { addReview } from '../../redux/slices/productSlice'

const ReviewForm = ({ productId }) => {
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		control,
		reset,
	} = useForm()
	const text = watch('review', '')

	const [rating, setRating] = React.useState(1)

	const handleRating = rate => {
		setRating(rate)
		setValue('rating', rate)
	}

	const onSubmit = data => {
		const reviewData = {
			user: data.name,
			comment: data.review,
			rating: rating,
		}
		dispatch(addReview({ productId, review: reviewData }))
		reset()
	}

	const onChangeCount = e => {
		const value = e.target.value
		if (value.length <= MAX_LENGTH) {
			setValue('review', value)
		}
	}

	return (
		<div className={styles.block}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				method='post'
				className={styles.form}
			>
				<div>
					<Controller
						name='rating'
						control={control}
						defaultValue={rating}
						render={({ field }) => (
							<Rating
								{...field}
								className={styles.rating}
								fillColor='#242424'
								ratingValue={rating}
								onClick={rate => handleRating(rate)}
								allowHalfIcon={false}
								size={40}
							/>
						)}
					/>
				</div>
				<input
					type='text'
					placeholder='Enter your name: '
					{...register('name', { required: 'Name is required' })}
				/>
				{errors.name && <p>{errors.name.message}</p>}

				<input
					type='email'
					placeholder='Enter your email: '
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address',
						},
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}

				<textarea
					value={text}
					onChange={onChangeCount}
					placeholder='Enter your review: '
					maxLength={MAX_LENGTH}
					{...register('review', { required: 'Review is required' })}
				/>
				<span>{MAX_LENGTH - text.length} symbols left</span>
				{errors.review && <p>{errors.review.message}</p>}

				<button type='submit'>Send</button>
			</form>
		</div>
	)
}

export default ReviewForm
