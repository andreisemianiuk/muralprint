import { AppRootStateType } from '../store'
import { ICard } from './cardTypes'

const getCardsInfo = (state: AppRootStateType): ICard[] => state.card.cards

export const cardSelectors = {
    getCardsInfo,
}