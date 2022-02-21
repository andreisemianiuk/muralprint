import { AppRootStateType } from '../store'
import { INote } from './noteTypes'

const getNotesInfo = (state: AppRootStateType): INote[] => state.note.notes

export const noteSelectors = {
    getNotesInfo,
}