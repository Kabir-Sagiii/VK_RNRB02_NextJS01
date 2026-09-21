import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux-slices/counterSlice.js"
import userNameReducer from "../redux-slices/userNameSlice.js"
let store = configureStore({
    reducer: {
        counterReducer,
        userNameReducer
    }
});

export default store