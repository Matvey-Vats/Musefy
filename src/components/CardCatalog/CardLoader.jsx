import React from 'react'
import ContentLoader from 'react-content-loader'

const CardLoader = () => (
	<ContentLoader
		speed={2}
		width={350}
		height={470}
		viewBox='0 0 350 470'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='0' rx='6' ry='6' width='350' height='350' />
		<rect x='0' y='372' rx='0' ry='0' width='170' height='20' />
		<rect x='276' y='372' rx='0' ry='0' width='72' height='20' />
		<rect x='0' y='450' rx='0' ry='0' width='70' height='18' />
		<rect x='246' y='428' rx='0' ry='0' width='100' height='40' />
	</ContentLoader>
)

export default CardLoader
