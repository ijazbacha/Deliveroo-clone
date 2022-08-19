import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.items =  action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export  const selectRestaurant = (state) => state.restaurant.items

export default restaurantSlice.reducer