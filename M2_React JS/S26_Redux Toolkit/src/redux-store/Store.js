import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-slices/counterSlice.js"

let store = configureStore({
    reducer: {
        counterReducer
    }
});

export default store