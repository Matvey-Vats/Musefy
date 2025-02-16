import React from 'react'
import { truncateWords } from '../../../../../utils/truncateWords'
import styles from './OfferCard.module.scss'

const OfferCard = ({ image, name, description }) => {
	return (
		<div className={styles.card}>
			<img src={image} alt={name} />
			<div className={styles.cardContent}>
				<h3 className={styles.title}>{name}</h3>
				<p>{truncateWords(description, 20)}</p>
				<a href='#!'>View more</a>
			</div>
		</div>
	)
}

export default OfferCard
