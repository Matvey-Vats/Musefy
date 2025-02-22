import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: 'Popular',
		sortProperty: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
		setSort(state, action) {
			state.sort = action.payload
		},
		setFilters(state, action) {
			state.sort = action.payload.sort
			state.currentPage = Number(action.payload.currentPage)
			state.categoryId = Number(action.payload.categoryId)
		},
	},
})

export const {
	setCategoryId,
	setSearchValue,
	setCurrentPage,
	setSort,
	setFilters,
} = filterSlice.actions

export default filterSlice.reducer
