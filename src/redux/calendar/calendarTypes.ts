export interface ICalendarState {
  quarterlyCalendar: ICalendar[]
  homeCalendar: ICalendar[]
  pocketCalendar: ICalendar[]
}

export interface ICalendar {
  id: string
  title: string
  buttons: IButtonTypes[]
}

export interface IButtonTypes {
  img?: string
  price?: number
  id: string
  value: string
  description: string
  name: string
  active: boolean
  buttons?: any
  disabled?:boolean
}


