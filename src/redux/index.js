import {configureStore} from "@reduxjs/toolkit"
import { popularProducts } from "./Slices/popularProducts"
import { cartReducer } from "./Slices/cartSlice"
import { heartReducer } from "./Slices/heartSlice"
import { alertReducer } from "./Slices/alertSlice"

const store = configureStore({
    reducer: {
        popular: popularProducts,
        cart: cartReducer,
        heart: heartReducer,
        alert: alertReducer
    }
})

export default store