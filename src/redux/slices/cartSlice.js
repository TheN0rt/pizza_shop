import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   totalPrice: 0,
   items: []
}

// const setTotalPrice = (state) => {
//    state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
// }

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         if(findItem){
            findItem.count++
         } else{
            state.items = [...state.items, {...action.payload, count: 1}]
         }

         state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
      },

      removeItem: (state, action) => {
         state.items = state.items.filter(obj => obj.id !== action.payload)
         state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
      },

      clearItems: (state) => {
         state.items = []
         state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
      },

      incrementCount: (state, action) => {
         const findItem = state.items.find(obj => obj.id === action.payload)
         if(findItem){
            findItem.count++
         }
      },

      decrementCount: (state, action) => {
         const findItem = state.items.find(obj => obj.id === action.payload)
         if(findItem){
            findItem.count--
         }
      }

   }
})

export const { addToCart, removeItem, clearItems, incrementCount, decrementCount } = cartSlice.actions

export default cartSlice.reducer