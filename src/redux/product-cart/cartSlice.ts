import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartState } from './cartTypes'
import { v1 } from 'uuid'

const initialState: ICartState = {
  cart: [],
  sum: 0,
}

const cartSlice = createSlice({
  name: 'product-cart',
  initialState,
  reducers: {
    setProductsToLS: (state) => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    getProductsFromLS: (state) => {
      state.cart = JSON.parse(localStorage.getItem('cart') as string) || []
    },
    addProduct: (state, action) => {
      state.cart.unshift({id: v1(), product: action.payload})
    },
    getSum: (state) => {
      //@ts-ignore
      state.sum = state.cart.reduce((acc, v) => acc + parseInt(v.product.match(/\d+ BYN*/gm)[0]), 0)
    },
    deleteItem: (state, action: PayloadAction<{ buttonId: string }>) => {
      state.cart = state.cart.filter(v => v.id !== action.payload.buttonId)
    },
    clearAllItems: (state) => {
      state.cart = []
    },
  },
  
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer