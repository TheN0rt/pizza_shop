import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterSliceState {
   categoryId: number,
   sortId: number
}

const initialState: FilterSliceState = {
   categoryId: 0,
   sortId: 0,
}

const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategoryId: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload
      },

      setSortId: (state, action: PayloadAction<number>) => {
         state.sortId = action.payload
      },

      setFilter: (state, action: PayloadAction<FilterSliceState>) => {
         state.categoryId = Number(action.payload.categoryId)
         state.sortId = Number(action.payload.sortId)
      }
   }
})

export const { setCategoryId, setSortId, setFilter } = filterSlice.actions;

export default filterSlice.reducer;

