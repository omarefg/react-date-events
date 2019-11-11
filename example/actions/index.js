import {
    SET_REMINDER_AREA_IS_OPEN,
    SET_SELECTED_DAY,
    SET_REMINDERS,
} from './types'

export const setReminderAreaIsOpen = payload => ({
    type: SET_REMINDER_AREA_IS_OPEN,
    payload
})

export const setSelectedDay = payload => ({
    type: SET_SELECTED_DAY,
    payload
})

export const setReminders = payload => ({
    type: SET_REMINDERS,
    payload
})