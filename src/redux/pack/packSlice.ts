import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v1 } from 'uuid'
import { IPackState } from './packTypes'
import homeImage from '../../components/Package/images/домик.jpg'
import mittenImage from '../../components/Package/images/варежка.jpg'
import vineImage from '../../components/Package/images/коробка для бутылки.jpg'
import toysImage from '../../components/Package/images/коробочка .jpg'

const initialState: IPackState = {
  paperPack: [
    {
      id: v1(), title: '', buttons: [
        {
          id: 'paper',
          value: 'Вид упаковки: пакет бумажный',
          description: 'Пакет бумажный',
          name: '1',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Формат(вертикальный):', buttons: [
        {
          id: 'A4',
          value: 'Формат: A4',
          description: 'A4',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: 'A5',
          value: 'Формат: A5',
          description: 'A5',
          name: '2',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Плотность:', buttons: [
        {
          id: '170',
          value: 'Плотность бумаги: 170г',
          description: '170г',
          name: '3',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Люверс:', buttons: [
        {id: 'true', value: 'Люверс: да', description: '+', name: '4', active: false, disabled: false},
        {id: 'false', value: 'Люверс: нет', description: '-', name: '4', active: false, disabled: false},
      ],
    },
  ],
  giftBoxPack: [
    {
      id: v1(), title: '', buttons: [
        {
          id: 'gift-box',
          value: 'Вид упаковки: коробка подарочная',
          description: 'Коробка подарочная',
          name: '1',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Вид коробки подарочной:', buttons: [
        {
          id: 'home',
          value: 'Вид коробки: Коробка для конфет "Домик"',
          description: 'Коробка для конфет "Домик"',
          name: '2',
          img: homeImage,
          price: 32,
          active: false,
          disabled: false,
        },
        {
          id: 'mitten',
          value: 'Вид коробки: Коробка для конфет "Варежка"',
          description: 'Коробка для конфет "Варежка"',
          name: '2',
          img: mittenImage,
          price: 14,
          active: false,
          disabled: false,
        },
        {
          id: 'vine',
          value: 'Вид коробки: Винная коробка',
          description: 'Винная коробка',
          name: '2',
          img: vineImage,
          price: 20,
          active: false,
          disabled: false,
        },
        {
          id: 'toys',
          value: 'Вид коробки: Набор игрушек',
          description: 'Набор игрушек',
          name: '2',
          img: toysImage,
          price: 30,
          active: false,
          disabled: false,
        },
      ],
    },
  ],
  craftPack: [
    {
      id: v1(), title: '', buttons: [
        {
          id: 'craft',
          value: 'Вид упаковки: крафт.пакет + стикер',
          description: 'Крафт.пакет + стикер',
          name: '1',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Размер(мм):', buttons: [
        {
          id: '170x90x312',
          value: 'Размер: 170x90x312 мм',
          description: '170x90x312',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: '220x120x250',
          value: 'Размер: 220x120x250 мм',
          description: '220x120x250',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: '260x150x350',
          value: 'Размер: 260x150x350 мм',
          description: '260x150x350',
          name: '2',
          active: false,
          disabled: false,
        },
        {
          id: '320x200x370',
          value: 'Размер: 320x200x370 мм',
          description: '320x200x370',
          name: '2',
          active: false,
          disabled: false,
        },
      
      ],
    },
    {
      id: v1(), title: 'Нанесение:', buttons: [
        {
          id: '1+0',
          value: 'Нанесение: 1+0',
          description: '1+0',
          name: '3',
          active: false,
          disabled: false,
        },
        {
          id: '1+1',
          value: 'Нанесение: 1+1',
          description: '1+1',
          name: '3',
          active: false,
          disabled: false,
        },
      ],
    },
    {
      id: v1(), title: 'Размер наклейки(мм):', buttons: [
        {
          id: '60x60',
          value: 'Размер наклейки: 60x60',
          description: '60x60',
          name: '4',
          active: false,
          disabled: false,
        },
        {
          id: '80x80',
          value: 'Размер наклейки: 80x80',
          description: '80x80',
          name: '4',
          active: false,
          disabled: false,
        },
        {
          id: '100x100',
          value: 'Размер наклейки: 100x100',
          description: '100x100',
          name: '4',
          active: false,
          disabled: false,
        },
        {
          id: '100x160',
          value: 'Размер наклейки: 100x160',
          description: '100x160',
          name: '4',
          active: false,
          disabled: false,
        },
        {
          id: '100x200',
          value: 'Размер наклейки: 100x200',
          description: '100x200',
          name: '4',
          active: false,
          disabled: false,
        },
        {
          id: '160x260',
          value: 'Размер наклейки: 160x260',
          description: '160x260',
          name: '4',
          active: false,
          disabled: false,
        },
      ],
    },
  ]
}

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      const {typeId, buttonId} = action.payload
      if (state.paperPack.find(v => v.id === typeId)) {
        state.paperPack.find(v =>
          v.id === typeId)?.buttons.map(button =>
          (button.id === buttonId)
            ? button.active = true
            : button.active = false)
        state.craftPack.map(v => v.buttons.map(button => button.active = false))
        state.giftBoxPack.map(v => v.buttons.map(button => button.active = false))
      }
      
      if (state.craftPack.find(v => v.id === typeId)) {
        state.craftPack.find(v =>
          v.id === typeId)?.buttons.map(button =>
          (button.id === buttonId)
            ? button.active = true
            : button.active = false)
        state.paperPack.map(v => v.buttons.map(button => button.active = false))
        state.giftBoxPack.map(v => v.buttons.map(button => button.active = false))
      }
      
      if (state.giftBoxPack.find(v => v.id === typeId)) {
        state.giftBoxPack.find(v =>
          v.id === typeId)?.buttons.map(button =>
          (button.id === buttonId)
            ? button.active = true
            : button.active = false)
        state.paperPack.map(v => v.buttons.map(button => button.active = false))
        state.craftPack.map(v => v.buttons.map(button => button.active = false))
      }
    },
    clearAllActiveButtons: (state) => {
      state.paperPack.map(n => n.buttons.map(b => {
        b.active = false
        b.disabled = false
      }))
      state.craftPack.map(n => n.buttons.map(b => {
        b.active = false
        b.disabled = false
      }))
      state.giftBoxPack.map(n => n.buttons.map(b => {
        b.active = false
        b.disabled = false
      }))
    },
    setDisabled: (state, action: PayloadAction<{ typeId: string, buttonId: string }>) => {
      const {typeId} = action.payload
      state.paperPack.map(v => v.title !== ''
        ? v?.buttons.map(b => !state.paperPack.find(s => s.id === typeId)
          ? b.disabled = true
          : b.disabled = false)
        : v,
      )
      state.craftPack.map(v => v.title !== ''
        ? v?.buttons.map(b => !state.craftPack.find(s => s.id === typeId)
          ? b.disabled = true
          : b.disabled = false)
        : v,
      )
      state.giftBoxPack.map(v => v.title !== ''
        ? v?.buttons.map(b => !state.giftBoxPack.find(s => s.id === typeId)
          ? b.disabled = true
          : b.disabled = false)
        : v,
      )
    },
  },
  
})

export const packActions = packSlice.actions
export const packReducer = packSlice.reducer