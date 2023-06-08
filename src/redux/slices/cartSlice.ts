import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPriceCart } from "../../utils/calcTotalPriceCart";

export type CartItem = {
   count: number,
   id: number,
   price: number,
   title: string, 
   imageUrl: string, 
   type: string, 
   size: number,
}

interface CartSliceState {
   totalPrice: number,
   items: CartItem[]
}

const initialState: CartSliceState = getCartFromLS()

// const setTotalPrice = (state) => {
//    state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
// }

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         if(findItem){
            findItem.count++
         } else{
            state.items = [...state.items, {...action.payload, count: 1}]
         }

         state.totalPrice = calcTotalPriceCart(state.items)
      },

      removeItem: (state, action: PayloadAction<CartItem>) => {
         state.items = [...state.items.filter(obj => obj.id !== action.payload.id)]
         state.totalPrice = calcTotalPriceCart(state.items)
      },

      clearItems: (state) => {
         state.items = []
         state.totalPrice = calcTotalPriceCart(state.items)
      },

      incrementCount: (state, action: PayloadAction<CartItem>) => {
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         state.totalPrice = calcTotalPriceCart(state.items)
         if(findItem){
            findItem.count++
         }
      },

      decrementCount: (state, action: PayloadAction<CartItem>) => {
         const findItem = state.items.find(obj => obj.id === action.payload.id)
         state.totalPrice = calcTotalPriceCart(state.items)
         if(findItem && findItem.count > 1){
            findItem.count--
         }
      }

   }
})

export const { addToCart, removeItem, clearItems, incrementCount, decrementCount } = cartSlice.actions

export default cartSlice.reducer