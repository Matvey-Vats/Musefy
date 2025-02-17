import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
	totalPrice: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action) {
			const findProduct = state.products.find(
				obj => obj.id === action.payload.id
			)

			if (findProduct) {
				findProduct.count++
			} else {
				state.products.push({ ...action.payload, count: 1 })
			}
			state.totalPrice = state.products.reduce(
				(sum, obj) => obj.price * obj.count + sum,
				0
			)
		},
		minusProduct(state, action) {
			state.products = state.products.filter(obj => obj.count > 0)
			const findProduct = state.products.find(obj => obj.id === action.payload)

			if (findProduct) findProduct.count--
		},
		removeProduct(state, action) {
			state.products = state.products.filter(obj => obj.id !== action.payload)
		},
		clearProducts(state) {
			state.products = []
			state.totalPrice = 0
		},
	},
})

export const { addProduct, minusProduct, removeProduct, clearProducts } =
	cartSlice.actions

export default cartSlice.reducer
