import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type fetchPizzasArgs = Record<string, string>

export const fetchPizzas = createAsyncThunk('menu/fetchPizzasStatus', async (params: fetchPizzasArgs) => {
   const { data } = await axios.get<itemType[]>(`https://644ab4bfa8370fb32156151f.mockapi.io/pizzas?${params.categoryParams}&${params.sortParams}&${params.orderParams}&${params.searchParams}`)

   return data;
})

type itemType = {
   count: number,
   id: number,
   price: number,
   title: string, 
   imageUrl: string, 
   types: number[], 
   sizes: number[],
   category: number,
 }

 enum Status {
   LOADING = 'loading',
   SUCCESS = 'success', 
   ERROR = 'error', 
 }

interface MenuSliceState {
   items: itemType[],
   status: Status
}

const initialState: MenuSliceState = {
   items: [],
   status: Status.LOADING
}

const menuSlice = createSlice({
   name: 'menu',
   initialState,
   reducers: {
      setItems: (state, action: PayloadAction<itemType[]>) => {
         state.items = action.payload
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchPizzas.pending, (state) => {
         state.status = Status.LOADING
         state.items = []
      })
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
         state.status = Status.SUCCESS
         state.items = action.payload
      })
      builder.addCase(fetchPizzas.rejected, (state) => {
         state.status = Status.ERROR
      })
   }
   // extraReducers: {
   //    [fetchPizzas.pending]: (state) => {
   //       state.status = 'loading'
   //       state.items = []
   //    },

   //    [fetchPizzas.fulfilled]: (state, action) => {
   //       state.status = 'success'
   //       state.items = action.payload
   //    },

   //    [fetchPizzas.rejected]: (state) => {
   //       state.status = 'error'
   //    }
   // }
})

export const { setItems } = menuSlice.actions

export default menuSlice.reducer