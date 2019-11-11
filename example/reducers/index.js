import {
    SET_REMINDER_AREA_IS_OPEN,
    SET_SELECTED_DAY,
    SET_REMINDERS
} from '../actions/types'


const reducer = (state, action) => {
    switch (action.type) {
        case SET_REMINDER_AREA_IS_OPEN: {
            return {
                ...state,
                reminderAreaIsOpen: action.payload.reminderAreaIsOpen
            }
        }
        case SET_SELECTED_DAY: {
            return {
                ...state,
                selectedDay: action.payload.selectedDay
            }
        }
        case SET_REMINDERS: {
            return {
                ...state,
                reminders: action.payload.reminders
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer
