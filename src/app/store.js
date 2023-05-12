import { configureStore } from "@reduxjs/toolkit";
import ratingsReducer from "../features/rating/ratingSlice";

export default configureStore({
    reducer: {
        ratings: ratingsReducer,
    },
});