import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITotalSumState } from './totalSumTypes'

const initialState: ITotalSumState = {
  totalPrice: 0,
}

const totalSumSlice = createSlice({
  name: 'totalSum',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<{ total: number}>) => {
      state.totalPrice = action.payload.total
    },
  },
  
})

export const totalSumActions = totalSumSlice.actions
export const totalSumReducer = totalSumSlice.reducer