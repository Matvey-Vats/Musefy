import qs from 'qs'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardCatalog from '../../components/CardCatalog'
import CardLoader from '../../components/CardCatalog/CardLoader'
import Categories from '../../components/Categories'
import Pagination from '../../components/Pagination'
import Search from '../../components/search/Search'
import Sort, { sortList } from '../../components/Sort'
import {
	setCategoryId,
	setCurrentPage,
	setFilters,
} from '../../redux/slices/filterSlice'
import { fetchProducts } from '../../redux/slices/productSlice'
import styles from './Catalog.module.scss'

const Catalog = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { products, status } = useSelector(state => state.product)
	const { categoryId, sort, searchValue, currentPage } = useSelector(
		state => state.filter
	)
	const isMounted = React.useRef(false)

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
				currentPage,
			})
		)
	}

	React.useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))
			console.log(params)
			const sort = sortList.find(
				obj => obj.sortProperty === params.sortProperty
			)

			dispatch(
				setFilters({
					categoryId: Number(params.categoryId) || 0,
					currentPage: Number(params.currentPage) || 1,
					sort: sort || sortList[0],
				})
			)
		}
	}, [])

	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			})
			navigate(`?${queryString}`)
		}
		isMounted.current = true
	}, [categoryId, sort.sortProperty, currentPage])

	React.useEffect(() => {
		window.scrollTo(0, 0)
		if (isMounted.current) {
			getProducts()
		}
	}, [categoryId, sort.sortProperty, currentPage])

	const productsCards = products.map(obj => (
		<CardCatalog key={obj.id} {...obj} />
	))
	const skeletons = [...new Array(6)].map((_, index) => (
		<CardLoader key={index} />
	))
	const onChangePage = page => {
		dispatch(setCurrentPage(page))
	}

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
				{status === 'error' && (
					<div className={styles.error}>
						Unfortunately, the data could not be retrieved. try to look later
					</div>
				)}
				{status === 'loading' ? skeletons : productsCards}
			</div>
			<div>
				{status === 'success' && (
					<Pagination currentPage={currentPage} onChangePage={onChangePage} />
				)}
			</div>
		</div>
	)
}

export default Catalog
