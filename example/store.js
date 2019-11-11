import { createStore, compose } from 'redux'
import reducer from './reducers'

const initialState = {
    reminderAreaIsOpen: false,
    selectedDay: {
        weekDay: '',
        month: '',
        day: '',
        year: '',
        date: ''
    },
    reminders: []
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, enhancer())

export default store
