import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'data',
  initialState: {
    lineItems: [],
    files: []
  },
  reducers: {
    addData: (state: any, action: any) => {
      state.lineItems = [...state.lineItems, ...action.payload]
    },
    addFile: (state: any, action: any) => {
      state.files = [...state.files, action.payload]
    },
    clearData: (state: any) => {
      state.lineItems = []
      state.files = []
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
  addFile,
  clearData,
  addHeaderOptions,
  updateQueryHeaders,
  updateSelectedMonth } = counterSlice.actions

export default counterSlice.reducer