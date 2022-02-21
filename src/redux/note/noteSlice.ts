import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v1 } from 'uuid'
import { INoteState } from './noteTypes'

const initialState: INoteState = {
  notes: [
    {
      id: v1(), title: 'Размер(мм):', buttons: [
        {id: 'A6', value: 'Размер блокнота: A6(105x148)', description: '105x148', name: '1', active: false, disabled: false},
        {id: 'A5', value: 'Размер блокнота: A5(148x210)', description: '148x210', name: '1', active: false, disabled: false},
        {id: 'A4', value: 'Размер блокнота: A4(210x297)', description: '210x297', name: '1', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Блок:', buttons: [
        {
          id: 'note-0+0',
          value: 'Блок: 0+0',
          description: '0+0',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: 'note-1+0',
          value: 'Блок: 1+0',
          description: '1+0',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: 'note-4+0',
          value: 'Блок: 4+0',
          description: '4+0',
          name: '2',
          active: false,
          disabled: false,
        }
      ],
    },
    {
      id: v1(), title: 'Ламинация:', buttons: [
        {
          id: 'note-glossy',
          value: 'Ламинация: глянцевая',
          description: 'Глянцевая',
          name: '3',
          active: false,
          disabled: false,
        },
        {
          id: 'quarter-matte',
          value: 'Ламинация: матовая',
          description: 'Матовая',
          name: '3',
          active: false,
          disabled: false,
        },
      ],
    },
  ],
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      state.notes.find(v =>
        v.id === action.payload.typeId)?.buttons.map(button =>
        (button.id === action.payload.buttonId)
          ? button.active = true
          : button.active = false)
    },
    clearAllActiveButtons: (state) => {
      state.notes.map(n => n.buttons.map(b => b.active = false))
    },
  },
  
})

export const noteActions = noteSlice.actions
export const noteReducer = noteSlice.reducer