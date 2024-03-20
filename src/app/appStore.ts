import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../entities/post/api/apiSlice';
import { rootreducer } from "./rootReducer";




const store = configureStore({
    reducer: rootreducer,
     middleware: getDefaultMiddleware => getDefaultMiddleware().concat( apiSlice.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

