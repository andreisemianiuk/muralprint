import { AppRootStateType } from '../store'
import { ICartState } from './cartTypes'

const getCartInfo = (state: AppRootStateType): ICartState => state.cart

export const cartSelectors = {
    getCartInfo,
}