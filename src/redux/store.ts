import { configureStore } from '@reduxjs/toolkit'
import FormSlice from '../features/FormSlice'

export const store = configureStore({
  reducer: {
    form: FormSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch