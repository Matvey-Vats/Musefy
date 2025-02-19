import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Search.module.scss'

const Search = () => {
	const dispatch = useDispatch()
	const [text, setText] = React.useState('')
	const { searchValue } = useSelector(state => state.filter)

	const handleChange = e => {
		setText(e.target.value)
	}

	const handleSubmit = () => {
		console.log(text)
	}

	return (
		<div className={styles.searchBlock}>
			<input
				value={text}
				onChange={handleChange}
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
