import React from 'react'
import { Link } from 'react-router-dom'
import { truncateWords } from '../../../../../utils/truncateWords'
import styles from './OfferCard.module.scss'

const OfferCard = ({ id, image, name, description }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={name} />
			<div className={styles.cardContent}>
				<h3 className={styles.title}>{name}</h3>
				<p>{truncateWords(description, 20)}</p>
				<Link to={`/catalog/${id}`}>View more</Link>
			</div>
		</div>
	)
}

export default OfferCard
