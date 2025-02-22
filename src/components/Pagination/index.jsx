import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

const Pagination = ({ currentPage, onChangePage }) => {
	return (
		<>
			<ReactPaginate
				className={styles.pagination}
				breakLabel='...'
				nextLabel='>'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={6}
				pageCount={2}
				previousLabel='<'
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
