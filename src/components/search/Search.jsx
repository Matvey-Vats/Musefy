import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue } from '../../redux/slices/filterSlice'
import styles from './Search.module.scss'

const Search = () => {
	const dispatch = useDispatch()
	const { searchValue } = useSelector(state => state.filter)

	const handleSubmit = () => {}

	return (
		<div className={styles.searchBlock}>
			<input
				value={searchValue}
				onChange={e => dispatch(setSearchValue(e.target.value))}
				className={styles.input}
				type='text'
				placeholder='Search...'
			/>
			<button onClick={handleSubmit} className={styles.button}>
				<BiSearch size={20} color='#fff' />
			</button>
		</div>
	)
}

export default Search
