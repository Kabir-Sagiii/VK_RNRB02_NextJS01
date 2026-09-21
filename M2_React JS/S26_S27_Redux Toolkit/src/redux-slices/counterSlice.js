import { createSlice } from "@reduxjs/toolkit";

// reducer, actionCreator,action,type
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increament(state) {
            //logic
            return state + 1
        },

    }

})
export const { increament } = counterSlice.actions
export default counterSlice.reducer

//counterslice = {actions:{increment:()=>{return {type:"counter/increment",payload:""}}},reducer:()=>{ //logic
//return state + 1}}
// {increment,reducer}