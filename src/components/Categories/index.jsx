import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
	const [categories, setCategories] = React.useState([])
	const [isActive, setIsActive] = React.useState(0)

	const onClickCategory = id => {
		setIsActive(id)
	}

	React.useEffect(() => {
		fetch('http://localhost:3000/categories')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setCategories([{ id: 0, name: 'All' }, ...data])
			})
	}, [])

	return (
		<div className={styles.categories}>
			<ul>
				{categories.length > 0 &&
					categories.map(obj => (
						<li
							onClick={() => onClickCategory(+obj.id)}
							className={isActive === +obj.id ? styles.active : ''}
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
