import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import product from './slices/productSlice'

export const store = configureStore({
	reducer: {
		product,
		filter,
	},
})
