import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
	categories: [],
	status: 'loading',
}

export const fetchProducts = createAsyncThunk(
	'product/fetchProducts',
	async params => {
		const { category, sortBy, order, search, currentPage } = params

		const res = await fetch(
			`http://localhost:3000/products?_page=${currentPage}&${category}&_sort=${sortBy}&_order=${order}${search}`
		)
		const data = await res.json()
		return data.data
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

export const addReview = createAsyncThunk(
	'product/AddReview',
	async ({ productId, review }, { rejectWithValue }) => {
		try {
			const productResponse = await fetch(
				`http://localhost:3000/products/${productId}`
			)
			const product = await productResponse.json()

			const updatedProduct = {
				...product,
				reviews: [...product.reviews, review],
			}

			const response = await fetch(
				`http://localhost:3000/products/${productId}`,
				{
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(updatedProduct),
				}
			)
			if (!response.ok) {
				throw new Error('Failed to add review')
			}

			return { productId, review }
		} catch (error) {
			return rejectWithValue(error.message)
		}
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
		getProductById(state, action) {
			const findProduct = state.products.find(obj => obj.id === action.payload)
			return findProduct
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
		// addReview
		builder.addCase(addReview.fulfilled, (state, action) => {
			const product = state.products.find(
				p => p.id === action.payload.productId
			)
			if (product) {
				product.reviews.push(action.payload.review)
			}
		})
	},
})

export const { setItems, setCategories, getProductById } = productSlice.actions

export default productSlice.reducer
