import { configureStore } from '@reduxjs/toolkit'
import  themSlice  from '../reducers/ThemReducers'

export const store = configureStore({
  reducer: themSlice
 
})