import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: ''
}

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      clearInput: (state) => {
         state.value = ''
      },

      setInputValue: (state, action) => {
         state.value = action.payload
      } 
   }
})

export const { setInputValue, clearInput } = searchSlice.actions

export default searchSlice.reducer 