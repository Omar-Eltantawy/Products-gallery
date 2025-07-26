import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './productsSlice'; 
import { themeReducer } from './themeSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer, 
    theme:themeReducer
  },
})