import { AppRootStateType } from '../store'
import { ICategoryProduct } from './pricesTypes'

const getPricesInfo = (state: AppRootStateType): ICategoryProduct[] => state.price.prices
const getCalendarsPrices = (state: AppRootStateType):any => state.price.prices.find(v => v.id === 'calendars')
const getNotesPrices = (state: AppRootStateType):any => state.price.prices.find(v => v.id === 'notes')
const getCardsPrices = (state: AppRootStateType):any => state.price.prices.find(v => v.id === 'cards')
const getPacksPrices = (state: AppRootStateType):any => state.price.prices.find(v => v.id === 'packs')

export const pricesSelectors = {
    getPricesInfo,
    getCalendarsPrices,
    getNotesPrices,
    getCardsPrices,
    getPacksPrices,
}