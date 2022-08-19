import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './feature/basketSlice'
import restaurantSlice from './feature/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice,
  },
})