"use client"

import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    user:{},
    isconnected:false
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginAction(state,action){
            state.user=action.payload
            state.isconnected=true
        },
        logoutAction(state){
            state.user={}
            state.isconnected=false
        }
    }
})

export const {logoutAction, loginAction} = userSlice.actions
export default userSlice.reducer