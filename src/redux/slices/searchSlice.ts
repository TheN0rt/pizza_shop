import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchSliceState {
   value: string
}

const initialState: SearchSliceState = {
   value: ''
}

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      clearInput: (state) => {
         state.value = ''
      },

      setInputValue: (state, action: PayloadAction<string>) => {
         state.value = action.payload
      } 
   }
})

export const { setInputValue, clearInput } = searchSlice.actions

export default searchSlice.reducer 