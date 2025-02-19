import clsx from 'clsx'
import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Sort.module.scss'

import { setSort } from '../../redux/slices/filterSlice'

export const sortList = [
	{ name: 'Popular DESC', sortProperty: 'rating' },
	{ name: 'Popular ASC', sortProperty: '-rating' },
	{ name: 'Price DESC', sortProperty: 'price' },
	{ name: 'Price ASC', sortProperty: '-price' },
	{ name: 'Title DESC', sortProperty: 'name' },
	{ name: 'Title ASC', sortProperty: '-name' },
]

const Sort = ({ value }) => {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = React.useState(false)

	const onClickSort = obj => {
		dispatch(setSort(obj))
		setIsOpen(false)
	}

	return (
		<div>
			<div onClick={() => setIsOpen(prev => !prev)} className={styles.label}>
				<p className={styles.labelText}>
					Sort by <span>{value.name}</span>
				</p>
			</div>
			<div className={clsx(styles.popup, { [styles.open]: isOpen })}>
				<ul>
					{sortList.map((obj, index) => (
						<li
							key={index}
							onClick={() => onClickSort(obj)}
							className={
								value.sortProperty === obj.sortProperty ? styles.active : ''
							}
						>
							{obj.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Sort
