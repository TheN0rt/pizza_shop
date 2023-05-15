import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice' 
import searchReducer from './slices/searchSlice'
import cartReducer from './slices/cartSlice'
import menuReducer from './slices/menuSlice'

export const store = configureStore({
   reducer: {filterReducer, searchReducer, cartReducer, menuReducer},
})