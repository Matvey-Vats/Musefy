import React from 'react'
import CardCatalog from '../../components/CardCatalog'
import Categories from '../../components/Categories'
import Search from '../../components/search/Search'
import Sort from '../../components/Sort'
import styles from './Catalog.module.scss'

const Catalog = () => {
	const [products, setProducts] = React.useState([])

	React.useEffect(() => {
		const categoryId = ''
		const sortBy = ''
		const sortProperty = ''

		fetch(
			`http://localhost:3000/products?categoryId=${categoryId}&_sort=${sortBy}&_order=${sortProperty}`
		)
			.then(res => {
				return res.json()
			})
			.then(data => {
				setProducts(data)
			})
	}, [])

	return (
		<div className='container'>
			<div className={styles.catalogTop}>
				<h3 className={styles.title}>Catalog</h3>
				<Search />
			</div>
			<div className={styles.filters}>
				<Categories />
				<Sort />
			</div>
			<div className={styles.box}>
				{products.length > 0 &&
					products.map(obj => <CardCatalog key={obj.id} {...obj} />)}
			</div>
		</div>
	)
}

export default Catalog
