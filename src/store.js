import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/userSlice";
import { spotifyApi } from "./features/api/spotifyApiSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        [spotifyApi.reducerPath]: spotifyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(spotifyApi.middleware)
    }
});


