export interface IPriceState {
  prices: ICategoryProduct[]
}

export interface ICategoryProduct {
  id: string
  categories?: Array<ICalendarQuarter | ICalendarHome | ICalendarPocket>
  size?: any
  notes?:any
  paper?:any
  view?:any
  price?:any
}

export interface ICalendarHome {
  id: string
  type: IType[]
}
export interface IType {
  id: string
  size: ISize[] | ISizeWithCursor[]
}
export interface ISize {
  id: string
  circulations: ICirculations[]
}

export interface ICursor {
  id: string
  circulations: ICirculations[]
}
export interface ISizeWithCursor {
  id: string
  cursor: ICursor[]
}

export interface ICalendarQuarter {
  id: string
  advertisingFields?: IFieldsForAdvertising[]
}

export interface ICorner {
  id: string
  roundingCorners?: ISize[]
}

export interface ICalendarPocket {
  id: string
  block: ICorner[]
}
export interface IFieldsForAdvertising {
  id: string
  net: INet[]
}

export interface INet {
  id: string
  binding: IBinding[]
}

export interface IBinding {
  id: string
  circulations: ICirculations[]
}

export interface ICirculations {
  id: string
  name: string
  priceForSingle: string
  priceForAll: string
}

