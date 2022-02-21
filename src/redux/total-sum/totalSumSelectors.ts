import { AppRootStateType } from '../store'

const getTotalSum = (state: AppRootStateType): number => state.totalSum.totalPrice

export const totalSumSelectors = {
    getTotalSum,
}