export interface IPackState {
  paperPack: IPack[]
  giftBoxPack: IPack[]
  craftPack: IPack[]
}

export interface IPack {
  id: string
  title: string
  buttons: IButtonTypes[]
}

export interface IButtonTypes {
  id: string
  value: string
  description: string
  name: string
  active: boolean
  disabled?:boolean
  img?: string
  price?: number
}


