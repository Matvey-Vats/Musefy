import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductSection.module.scss'

import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductSectionCard from './ProductSectionCard'
import ProductCardLoader from './ProductSectionCard/ProductCardLoader'

const ProductSection = () => {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		setIsLoading(true)

		fetch('http://localhost:3000/products')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setItems(data)
				setIsLoading(false)
			})
	}, [])

	const skeletons = [...new Array(2)].map((_, index) => (
		<SwiperSlide key={index}>
			<ProductCardLoader />
		</SwiperSlide>
	))

	return (
		<section className={styles.products}>
			<h3>Our Products</h3>
			<div className={styles.mainDiv}>
				<Swiper
					slidesPerView={1}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					className={styles.slider}
					breakpoints={{
						932: { slidesPerView: 2 },
					}}
				>
					{isLoading
						? skeletons
						: items.length > 0 &&
						  items.slice(0, 7).map(item => (
								<SwiperSlide key={item.id}>
									<ProductSectionCard {...item} />
								</SwiperSlide>
						  ))}
				</Swiper>
				<div className={styles.linkBlock}>
					<Link className={styles.link} to='catalog'>
						View all
					</Link>
				</div>
			</div>
		</section>
	)
}

export default ProductSection
