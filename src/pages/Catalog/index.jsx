import React from 'react'
import CardCatalog from '../../components/CardCatalog'
import Categories from '../../components/Categories'
import Search from '../../components/search/Search'
import Sort from '../../components/Sort'
import styles from './Catalog.module.scss'

const Catalog = () => {
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
				<CardCatalog />
				<CardCatalog />
				<CardCatalog />
				<CardCatalog />
				<CardCatalog />
				<CardCatalog />
				<CardCatalog />
			</div>
		</div>
	)
}

export default Catalog
