import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/slices/productSlice'
import styles from './Categories.module.scss'

const Categories = ({ categoryId, onChangeCategory }) => {
	const dispatch = useDispatch()
	const { categories } = useSelector(state => state.product)

	React.useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	return (
		<div className={styles.categories}>
			<ul>
				{categories.length > 0 &&
					categories.map(obj => (
						<li
							onClick={() => onChangeCategory(obj.id)}
							className={categoryId === obj.id ? styles.active : ''}
							key={obj.id}
						>
							{obj.name}
						</li>
					))}
			</ul>
		</div>
	)
}

export default Categories
