import { AppRootStateType } from '../store'
import { ICalendar } from './calendarTypes'

const getQuarterlyInfo = (state: AppRootStateType): ICalendar[] => state.calendar.quarterlyCalendar
const getHomeCalendarInfo = (state: AppRootStateType): ICalendar[] => state.calendar.homeCalendar
const getPocketCalendarInfo = (state: AppRootStateType): ICalendar[] => state.calendar.pocketCalendar

export const calendarSelectors = {
    getQuarterlyInfo,
    getHomeCalendarInfo,
    getPocketCalendarInfo
}