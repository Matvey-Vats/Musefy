import clsx from 'clsx'
import React from 'react'
import styles from './Sort.module.scss'

const Sort = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div>
			<div onClick={() => setIsOpen(prev => !prev)} className={styles.label}>
				<p className={styles.labelText}>
					Sort by <span>Popular</span>
				</p>
			</div>
			<div className={clsx(styles.popup, { [styles.open]: isOpen })}>
				<ul>
					<li className={styles.active}>Popular</li>
					<li>Popular</li>
					<li>Popular</li>
					<li>Popular</li>
					<li>Popular</li>
					<li>Popular</li>
				</ul>
			</div>
		</div>
	)
}

export default Sort
