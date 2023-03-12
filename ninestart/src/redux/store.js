import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../redux/filter/filterSlice'
export const store = configureStore({
  reducer: {
    filter: filterSlice
  },
});