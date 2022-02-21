export interface INoteState {
  notes: INote[]
}

export interface INote {
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
  buttons?: any
  disabled?:boolean
}


