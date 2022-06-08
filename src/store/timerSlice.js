import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: false,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.value = true
    },
    stop: (state) => {
      state.value = false
    },
  },
})

export const { start, stop } = timerSlice.actions

export default timerSlice.reducer