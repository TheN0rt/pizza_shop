import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('menu/fetchPizzasStatus', async (params) => {
   const { data } = await axios.get(`https://644ab4bfa8370fb32156151f.mockapi.io/pizzas?${params.categoryParams}&${params.sortParams}&${params.orderParams}&${params.searchParams}`)

   return data
})

const initialState = {
   items: [],
   status: ''
}

const menuSlice = createSlice({
   name: 'menu',
   initialState,
   reducers: {
      setItems: (state, action) => {
         state.items = action.payload
      },
   },
   extraReducers: {
      [fetchPizzas.pending]: (state) => {
         state.status = 'loading'
         state.items = []
      },

      [fetchPizzas.fulfilled]: (state, action) => {
         state.status = 'success'
         state.items = action.payload
      },

      [fetchPizzas.rejected]: (state) => {
         state.status = 'error'
      }
   }
})

export const { setItems } = menuSlice.actions

export default menuSlice.reducer