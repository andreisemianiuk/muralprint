import { AppRootStateType } from '../store'
import { IPack } from './packTypes'

const getPaperPacksInfo = (state: AppRootStateType): IPack[] => state.pack.paperPack
const getGiftBoxPacksInfo = (state: AppRootStateType): IPack[] => state.pack.giftBoxPack
const getCraftPacksInfo = (state: AppRootStateType): IPack[] => state.pack.craftPack

export const packSelectors = {
    getPaperPacksInfo,
    getGiftBoxPacksInfo,
    getCraftPacksInfo,
}