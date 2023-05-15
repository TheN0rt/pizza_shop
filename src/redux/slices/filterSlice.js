import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categoryId: 0,
   sortId: 0,
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategoryId: (state, action) => {
         state.categoryId = action.payload
      },

      setSortId: (state, action) => {
         state.sortId = action.payload
      },

      setFilter: (state, action) => {
         state.categoryId = Number(action.payload.categoryId)
         state.sortId = Number(action.payload.sortId)
      }
   }
})

export const { setCategoryId, setSortId, setFilter } = filterSlice.actions;

export default filterSlice.reducer;

