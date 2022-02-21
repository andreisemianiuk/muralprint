import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
  isFetching: boolean
}

const initialState: IAppState = {
  isFetching: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsFetching(state, action): void {
      state.isFetching = action.payload
    },
  },
  
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer