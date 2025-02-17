import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardCatalog from '../../components/CardCatalog'
import CardLoader from '../../components/CardCatalog/CardLoader'
import Categories from '../../components/Categories'
import Search from '../../components/search/Search'

import Sort from '../../components/Sort'
import { setCategoryId } from '../../redux/slices/filterSlice'
import { fetchProducts } from '../../redux/slices/productSlice'
import styles from './Catalog.module.scss'

const Catalog = () => {
	const dispatch = useDispatch()
	const { products, status } = useSelector(state => state.product)
	const { categoryId, sort, searchValue } = useSelector(state => state.filter)

	const onChangeCategory = React.useCallback(id => {
		dispatch(setCategoryId(id))
	})

	const getProducts = async () => {
		const sortBy = sort.sortProperty.replace('-', '')
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
		const category = categoryId > 0 ? `categoryId=${categoryId}` : ''
		const search = searchValue ? `&q=${searchValue}` : ''

		dispatch(
			fetchProducts({
				category,
				sortBy,
				order,
				search,
			})
		)
	}

	React.useEffect(() => {
		getProducts()
	}, [categoryId, sort])

	const productsCards = products.map(obj => (
		<CardCatalog key={obj.id} {...obj} />
	))
	const skeletons = [...new Array(6)].map((_, index) => (
		<CardLoader key={index} />
	))

	return (
		<div className='container'>
			<div className={styles.catalogTop}>
				<h3 className={styles.title}>Catalog</h3>
				<Search />
			</div>
			<div className={styles.filters}>
				<Categories
					categoryId={categoryId}
					onChangeCategory={onChangeCategory}
				/>
				<Sort value={sort} />
			</div>
			<div className={styles.box}>
				{status === 'loading' ? skeletons : productsCards}
			</div>
		</div>
	)
}

export default Catalog
