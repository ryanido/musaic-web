import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/userSlice";
import { apiSlice } from "./features/api/apiSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }
});


