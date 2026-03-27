import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'data',
  initialState: {
    lineItems: []
  },
  reducers: {
    addData: (state: any, action: any) => {
      state.lineItems = [...state.lineItems, ...action.payload]
    },
    clearData: (state: any) => {
      state.lineItems = []
    },
    addHeaderOptions: (state: any, action: any) => {
      state.headerOptions = action.payload
    },
    updateQueryHeaders: (state: any, action: any) => {
      state.queryHeaders = {
        ...state.queryHeaders,
        [action.payload.which]: action.payload.value
      }
    },
    updateSelectedMonth: (state: any, action: any) => {
      state.selectedMonth = action.payload.value
    }

  },
})

// Action creators are generated for each case reducer function
export const {
  addData,
  clearData,
  addHeaderOptions,
  updateQueryHeaders,
  updateSelectedMonth } = counterSlice.actions

export default counterSlice.reducer