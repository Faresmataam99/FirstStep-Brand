import {configureStore} from "@reduxjs/toolkit"
import {userSlice} from './store/userSlice'
import {cartSlice} from "./store/cartSlice"
import {productSlice} from "./store/productSlice"


export default ()=>{
    return configureStore({
        reducer:{  
        user:userSlice.reducer,
        cart:cartSlice.reducer,
        product:productSlice.reducer
    }
    })
}