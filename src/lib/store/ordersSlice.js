import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    orders:[],
    isValid:{}
}

export const ordersSlice = createSlice({
name:'order',
initialState,
reducers:{
    createOrder(state,action){
state.orders=action.payload
action.payload.forEach( orders => {
    state.isValid[orders._id]=false
});
    },
    validateOrder(state,action){
        state.isValid=action.payload,
        state.isValid[orderId]=true
    }
}
})

export const {createOrder,validateOrder} = ordersSlice.actions
export default ordersSlice.reducer

