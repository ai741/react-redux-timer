import { configureStore } from '@reduxjs/toolkit'
import timerSilce from "./timerSlice"

export const store = configureStore({
  reducer: {
      timer: timerSilce,
  },
})