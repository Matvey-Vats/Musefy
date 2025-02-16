import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
	return (
		<div className='container'>
			<div className={styles.block}>
				<h1>404</h1>
				<p>
					We are sorry, but the page you are looking for does not exist or has
					been moved. Go back to the beginning and find what you are looking
					for.
				</p>
				<Link className={styles.link} to='/'>
					Home
				</Link>
			</div>
		</div>
	)
}

export default NotFound
