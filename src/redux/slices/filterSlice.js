import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	categoryId: 0,
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
		setSort(state, action) {
			state.sort = action.payload
		},
	},
})

export const { setCategoryId, setSearchValue, setSort } = filterSlice.actions

export default filterSlice.reducer
