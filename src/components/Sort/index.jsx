import clsx from 'clsx'
import React from 'react'
import styles from './Sort.module.scss'

const sortList = [
	{ name: 'Popular DESC', sortProperty: 'rating' },
	{ name: 'Popular ASC', sortProperty: '-rating' },
	{ name: 'Price DESC', sortProperty: 'price' },
	{ name: 'Price DESC', sortProperty: '-price' },
	{ name: 'Title DESC', sortProperty: 'title' },
	{ name: 'Title DESC', sortProperty: '-title' },
]

const Sort = () => {
	const [sortIsActive, setSortIsActive] = React.useState(0)
	const [isOpen, setIsOpen] = React.useState(false)
	const sortName = sortList[sortIsActive].name

	const onClickSort = id => {
		setSortIsActive(id)
		setIsOpen(false)
	}

	return (
		<div>
			<div onClick={() => setIsOpen(prev => !prev)} className={styles.label}>
				<p className={styles.labelText}>
					Sort by <span>{sortName}</span>
				</p>
			</div>
			<div className={clsx(styles.popup, { [styles.open]: isOpen })}>
				<ul>
					{sortList.map((obj, index) => (
						<li
							key={index}
							onClick={() => onClickSort(index)}
							className={sortIsActive === index ? styles.active : ''}
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
