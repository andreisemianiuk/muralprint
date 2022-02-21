import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app/appSlice'
import { calendarReducer } from './calendar/calendarSlice'
import { pricesReducer } from './prices/pricesSlice'
import { totalSumReducer } from './total-sum/totalSumSlice'
import { noteReducer } from './note/noteSlice'
import { cardReducer } from './card/cardSlice'
import { packReducer } from './pack/packSlice'
import { cartReducer } from './product-cart/cartSlice'

const rootReducer = combineReducers({
    app: appReducer,
    calendar: calendarReducer,
    note: noteReducer,
    card: cardReducer,
    pack: packReducer,
    price: pricesReducer,
    totalSum: totalSumReducer,
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>