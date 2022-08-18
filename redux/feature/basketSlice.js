import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.item = [...state.item, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.item.findIndex((item) => item.id == action.payload.id)
      let newBasket = [...state.item]
      if(index >= 0 ){
        newBasket.splice(index, 1)
      }else{
        console.log(`Cant remove product (id: ${action.payload.id}) as its not in basket!`);
      }
      state.item = newBasket

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer