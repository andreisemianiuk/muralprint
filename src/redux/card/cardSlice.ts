import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v1 } from 'uuid'
import { ICardState } from './cardTypes'

const initialState: ICardState = {
  cards: [
    {
      id: v1(), title: 'Бумага:', buttons: [
        {id: 'design-paper', value: 'Вид бумаги для открытки: дизайнерская', description: 'Дизайнерская бумага', name: '1', active: false, disabled: false},
        {id: 'coated-paper', value: 'Вид бумаги для открытки: бумага для печати', description: 'Бумага для печати', name: '1', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Формат в развернутом виде(мм):', buttons: [
        {id: '200x200', value: 'Размер: 200x200', description: '200x200', name: '2', active: false, disabled: false},
        {id: '200x100', value: 'Размер: 200x100', description: '200x100', name: '2', active: false, disabled: false},
        {id: '105x148', value: 'Размер: 105x148', description: '105x148', name: '2', active: false, disabled: false},
        {id: '148x210', value: 'Размер: 148x210', description: '148x210', name: '2', active: false, disabled: false},
        
      ],
    },
    {
      id: v1(), title: 'Лазерная резка:', buttons: [
        {id: 'laser-true', value: 'Лазерная резка: да', description: '+', name: '3', active: false, disabled: false},
        {id: 'laser-false', value: 'Лазерная резка: нет', description: '-', name: '3', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Вкладыш:', buttons: [
        {id: 'liner-true', value: 'Вкладыш: да', description: '+', name: '4', active: false, disabled: false},
        {id: 'liner-false', value: 'Вкладыш: нет', description: '-', name: '4', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Ламинация:', buttons: [
        {id: 'without', value: 'Ламинация: без', description: 'Без ламинации', name: '5', active: false, disabled: false},
        {id: 'matte-glossy', value: 'Ламинация: мат/глянц', description: 'Матовая/глянцевая', name: '5', active: false, disabled: false},
        {id: 'soft-touch', value: 'Ламинация: софт-тач', description: 'Софт-тач', name: '5', active: false, disabled: false},
      ],
    },
  ]
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      const {typeId,buttonId} = action.payload
      if (buttonId === 'design-paper') {
        state.cards.find(c => c.title === 'Ламинация:')?.buttons.map(b => b.id !== 'without' ? b.active = false : b)
      }
      state.cards.find(v =>
        v.id === typeId)?.buttons.map(button =>
        (button.id === buttonId)
          ? button.active = true
          : button.active = false)
    },
    setDisabled: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      const {typeId} = action.payload
      if (state.cards.find(s => s.id === typeId)) {
        if (state.cards.find(v => v.title === 'Бумага:')?.buttons.find(b => b.id === 'design-paper')?.active) {
          state.cards.find(c => c.title === 'Ламинация:')?.buttons.map(b => b.id !== 'without' ? b.disabled = true : b)
        } else {
          state.cards.find(c => c.title === 'Ламинация:')?.buttons.map(b => b.disabled = false)
        }
      }
    },
    clearAllActiveButtons: (state) => {
      state.cards.map(n => n.buttons.map(b => b.active = false))
      state.cards.map(n => n.buttons.map(b => b.disabled = false))
    },
  },
  
})

export const cardActions = cardSlice.actions
export const cardReducer = cardSlice.reducer