import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
	categories: [],
	status: 'loading',
}
// ?categoryId=${categoryId}&_sort=${sortBy}&_order=${sortProperty}
// &_sort=${sortBy}&_order=${sortProperty}
export const fetchProducts = createAsyncThunk(
	'product/fetchProducts',
	async params => {
		const { category, sortBy, order } = params

		const res = await fetch(
			`http://localhost:3000/products?${category}&_sort=${sortBy}&_order=${order}`
		)
		const data = await res.json()
		return data
	}
)

export const fetchCategories = createAsyncThunk(
	'filter/fetchCategories',
	async () => {
		const res = await fetch('http://localhost:3000/categories')
		const data = await res.json()
		return data
	}
)

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setItems(state, action) {
			state.products = action.payload
		},
		setCategories(state, action) {
			state.categories = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.status = 'loading'
			state.products = []
		})
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.status = 'success'
			state.products = action.payload
		})
		builder.addCase(fetchProducts.rejected, state => {
			state.status = 'error'
			state.products = []
		})
		// fetchCategories
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = [{ id: 0, name: 'All' }, ...action.payload]
		})
	},
})

export const { setItems, setCategories } = productSlice.actions

export default productSlice.reducer
