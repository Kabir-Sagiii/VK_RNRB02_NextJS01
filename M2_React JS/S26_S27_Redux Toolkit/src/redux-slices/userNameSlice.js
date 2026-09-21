
import { createSlice } from "@reduxjs/toolkit";


const userNameSlice=createSlice({
       name :"username",
       initialState : "------------------",
       reducers : {
            updateUserName(_,action){

                return action.payload
            }
       }
})

export const { updateUserName}= userNameSlice.actions

export default userNameSlice.reducer