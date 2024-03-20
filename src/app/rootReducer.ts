import { combineReducers } from "redux";
import { apiSlice } from "../entities/post/api/apiSlice";


export const rootreducer = combineReducers({
    [apiSlice.reducerPath] : apiSlice.reducer
})