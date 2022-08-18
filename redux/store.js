import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './feature/basketSlice'

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
})