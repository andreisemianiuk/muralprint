import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v1 } from 'uuid'
import { ICalendarState } from './calendarTypes'

const initialState: ICalendarState = {
  quarterlyCalendar: [
    {
      id: v1(), title: '', buttons: [
        {
          id: 'quarter',
          value: 'Вид календаря: "Квартальный"',
          description: 'Квартальный',
          name: '1',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Рекламные поля:', buttons: [
        {id: 'oneField', value: 'Рекламные поля: 1', description: '1', name: '2', active: false, disabled: false},
        {id: 'threeFields', value: 'Рекламные поля: 3', description: '3', name: '2', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Сетка:', buttons: [
        {
          id: 'net-standard',
          value: 'Сетка: стандартная',
          description: 'Стандартная',
          name: '3',
          active: false,
          disabled: false,
        },
        {
          id: 'individual',
          value: 'Сетка: индвидуальная',
          description: 'Индвидуальная',
          name: '3',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Крепление:', buttons: [
        {id: 'grommet', value: 'Крепление: люверс', description: 'Люверс', name: '4', active: false, disabled: false},
        {id: 'plank', value: 'Крепление: планка', description: 'Планка', name: '4', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Ламинация:', buttons: [
        {
          id: 'quarter-glossy',
          value: 'Ламинация: глянцевая',
          description: 'Глянцевая',
          name: '5',
          active: false,
          disabled: false,
        },
        {
          id: 'quarter-matte',
          value: 'Ламинация: матовая',
          description: 'Матовая',
          name: '5',
          active: false,
          disabled: false,
        },
      ],
    },
  ],
  homeCalendar: [
    {
      id: v1(), title: '', buttons: [
        {id: 'home', value: 'Вид календаря: "Домик"', description: 'Домик', name: '1', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Блок:', buttons: [
        {
          id: 'block-standard',
          value: 'Блок: стандарт',
          description: 'Стандарт',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: 'crossover',
          value: 'Блок: перекидной',
          description: 'Перекидной',
          name: '2',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Размер:', buttons: [
        {id: '210x100', value: 'Размер: 210x100', description: '210x100', name: '3', active: false, disabled: false},
        {id: '210x120', value: 'Размер: 210x120', description: '210x120', name: '3', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Курсор:', buttons: [
        {id: 'plus', value: 'Курсор: плюс', description: '+', name: '4', active: false, disabled: false},
        {id: 'minus', value: 'Курсор: минус', description: '-', name: '4', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Ламинация:', buttons: [
        {
          id: 'home-glossy',
          value: 'Ламинация: глянцевая',
          description: 'Глянцевая',
          name: '5',
          active: false,
          disabled: false,
        },
        {
          id: 'home-matte',
          value: 'Ламинация: матовая',
          description: 'Матовая',
          name: '5',
          active: false,
          disabled: false,
        },
      ],
    },
  ],
  pocketCalendar: [
    {
      id: v1(), title: '', buttons: [
        {id: 'pocket', value: 'Вид календаря: "Карманный"', description: 'Карманный', name: '1', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Блок:', buttons: [
        {id: 'block-4+4', value: 'Блок: Двусторонняя печать', description: 'Двусторонняя печать', name: '2', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Кругление углов:', buttons: [
        {id: 'round-minus', value: 'Кругление углов: -', description: '-', name: '3', active: false, disabled: false},
        {id: 'round-plus', value: 'Кругление углов: +', description: '+', name: '3', active: false, disabled: false},
      ],
    },
    {
      id: v1(), title: 'Ламинация:', buttons: [
        {
          id: 'pocket-glossy',
          value: 'Ламинация: глянцевая',
          description: 'Глянцевая',
          name: '5',
          active: false,
          disabled: false,
        },
        {
          id: 'pocket-matte',
          value: 'Ламинация: матовая',
          description: 'Матовая',
          name: '5',
          active: false,
          disabled: false,
        },
      ],
    },
  ],
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    resetAll: (state) => {
      state.homeCalendar.map(v => v.buttons.map(button => {
        button.active = false
        button.disabled = false
      }))
      state.quarterlyCalendar.map(v => v.buttons.map(button => {
        button.active = false
        button.disabled = false
      }))
      state.pocketCalendar.map(v => v.buttons.map(button => {
        button.active = false
        button.disabled = false
      }))
    },
    setIsActive: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      const {typeId, buttonId} = action.payload
      if (state.quarterlyCalendar.find(q => q.id === typeId)) {
        state.quarterlyCalendar.find(v =>
          v.id === typeId)?.buttons.map(button =>
          (button.id === buttonId)
            ? button.active = true
            : button.active = false)
        state.homeCalendar.map(v => v.buttons.map(button => button.active = false))
        state.pocketCalendar.map(v => v.buttons.map(button => button.active = false))
      } else if (state.homeCalendar.find(h => h.id === typeId)) {
        if (buttonId === 'block-standard') {
          state.homeCalendar.find(v =>
            v.title === 'Курсор:')?.buttons.map(button => button.active = false)
          state.homeCalendar.find(v =>
            v.title === 'Размер:')?.buttons.map(button => button.id === '210x120' ? button.active = false : button)
        }
        state.homeCalendar.find(v =>
          v.id === typeId)?.buttons.map(button =>
          (button.id === buttonId)
            ? button.active = true
            : button.active = false)
        state.quarterlyCalendar.map(v => v.buttons.map(button => button.active = false))
        state.pocketCalendar.map(v => v.buttons.map(button => button.active = false))
      } else if (state.pocketCalendar.find(h => h.id === typeId)) {
        state.pocketCalendar.find(v =>
          v.id === typeId)?.buttons.map(button =>
          (button.id === buttonId)
            ? button.active = true
            : button.active = false)
        state.quarterlyCalendar.map(v => v.buttons.map(button => button.active = false))
        state.homeCalendar.map(v => v.buttons.map(button => button.active = false))
      }
    },
    setDisabled: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      const {typeId} = action.payload
      if (!state.homeCalendar.find(s => s.id === typeId)) {
        state.homeCalendar.map(v => v.title !== ''
          ? v?.buttons.map(b => !state.homeCalendar.find(s => s.id === typeId)
            ? b.disabled = true
            : b.disabled = false)
          : v,
        )
      }
      if (state.homeCalendar.find(s => s.id === typeId)) {
        if (state.homeCalendar.find(h => h.title === 'Блок:')?.buttons.find(b => b.id === 'block-standard')?.active) {
          state.homeCalendar.find(v => v.title === 'Размер:')
            ?.buttons.map(b => b.id !== '210x100' ? b.disabled = true : b.disabled = false)
          state.homeCalendar.find(v => v.title === 'Курсор:')
            ?.buttons.map(b => b.disabled = true)
        } else {
          state.homeCalendar.map(v => v.title !== ''
            ? v?.buttons.map(b => !state.homeCalendar.find(s => s.id === typeId)
              ? b.disabled = true
              : b.disabled = false)
            : v,
          )
        }
      }
      state.quarterlyCalendar.map(v => v.title !== ''
        ? v?.buttons.map(b => !state.quarterlyCalendar.find(s => s.id === typeId)
          ? b.disabled = true
          : b.disabled = false)
        : v,
      )
      state.pocketCalendar.map(v => v.title !== ''
        ? v?.buttons.map(b => !state.pocketCalendar.find(s => s.id === typeId)
          ? b.disabled = true
          : b.disabled = false)
        : v,
      )
    },
  },
  
})

export const calendarActions = calendarSlice.actions
export const calendarReducer = calendarSlice.reducer