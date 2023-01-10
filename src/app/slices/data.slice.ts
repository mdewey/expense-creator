import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'data',
  initialState: {
    lineItems: []
  },
  reducers: {
    addData: (state: any, action: any) => {
      state.lineItems = [...action.payload]
    },
    addHeaderOptions: (state: any, action: any) => {
      state.headerOptions = action.payload
    },
    updateQueryHeaders: (state: any, action: any) => {
      state.queryHeaders = {
        ...state.queryHeaders,
        [action.payload.which]: action.payload.value
      }
    }

  },
})

// Action creators are generated for each case reducer function
export const { addData, addHeaderOptions, updateQueryHeaders } = counterSlice.actions

export default counterSlice.reducer