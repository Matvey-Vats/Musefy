import React from 'react'
import { BiSearch } from 'react-icons/bi'
import styles from './Search.module.scss'

const Search = () => {
	return (
		<div className={styles.searchBlock}>
			<input className={styles.input} type='text' placeholder='Search...' />
			<button className={styles.button}>
				<BiSearch size={20} color='#fff' />
			</button>
		</div>
	)
}

export default Search
