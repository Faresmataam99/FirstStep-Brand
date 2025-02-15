import {configureStore} from "@reduxjs/toolkit"
import {userSlice} from './store/userSlice'
import {cartSlice} from "./store/cartSlice"
import {productSlice} from "./store/productSlice"
import {ordersSlice }from "./store/ordersSlice"


export default ()=>{
    return configureStore({
        reducer:{  
        user:userSlice.reducer,
        cart:cartSlice.reducer,
        product:productSlice.reducer,
        orders:ordersSlice.reducer,
    }
    })
}