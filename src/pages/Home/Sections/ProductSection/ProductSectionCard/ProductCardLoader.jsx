import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './ProductSectionCard.module.scss'

const ProductCardLoader = () => (
	<ContentLoader
		className={styles.card}
		speed={2}
		width={600}
		height={490}
		viewBox='0 0 400 490'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='0' rx='8' ry='8' width='400' height='400' />
		<rect x='144' y='417' rx='8' ry='8' width='100' height='25' />
		<rect x='90' y='458' rx='8' ry='8' width='205' height='30' />
	</ContentLoader>
)

export default ProductCardLoader
