import React from 'react';
import { connect } from 'react-redux';
import {
    setReminderAreaIsOpen,
    setSelectedDay,
    setReminders
} from './actions'
import Calendar from '../src';
import { getWeatherData } from './request'

import data from './db/cities.json'

const cities = data.slice(0, 20).map(({ name, id }) => ({ label: name, value: id, id }))

const App = (props) => {
    const {
        setReminderAreaIsOpen,
        reminderAreaIsOpen,
        setSelectedDay,
        selectedDay,
        setReminders,
        reminders
    } = props

    const onDayClick = selectedDay => {
        if (!reminderAreaIsOpen) {
            setReminderAreaIsOpen({ reminderAreaIsOpen: true })
        }
        setSelectedDay({ selectedDay })
    }

    const onAddReminder = date => {
        const reminder = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            description: '',
            hour: '',
            date,
            weather: null
        }
        setReminders({ reminders: [...reminders, reminder] })
    }

    const getUpdatedReminders = (id, field, value) => {
        return reminders.map(reminder => {
            const { id: reminderId } = reminder
            if (reminderId === id) {
                field === 'date' && reminder.city && addWeatherData(id, reminder.city)
                field === 'city' && addWeatherData(id, value)
                reminder[field] = value
            }
            return reminder
        })
    }

    const addWeatherData = (id, value) => {
        getWeatherData(value)
        .then(({ list }) => {
            const actualDt = new Date(reminders.find(reminder => reminder.id === id).date)
            const exists = list.find(l => {
                const lDate = new Date(l.dt_txt)
                const lDateInActualTime = new Date(lDate.getFullYear(), lDate.getMonth(), lDate.getDate(), actualDt.getHours(), actualDt.getMinutes(), actualDt.getSeconds())
                return lDateInActualTime.getTime() === actualDt.getTime()
            })
            console.log(exists)
            if (exists){
                const { weather, main } = exists
                const weatherValue = {
                    temp: Math.round((main.temp - 273.15) * 9/5 + 32),
                    title: weather[0].main,
                    description: weather[0].description,
                    icon: `https://openweathermap.org/img/w/${weather[0].icon}.png`,
                }
                const updatedReminders = getUpdatedReminders(id, 'weather', weatherValue)
                setReminders({ reminders: updatedReminders })
            } else {
                const updatedReminders = getUpdatedReminders(id, 'weather', null)
                setReminders({ reminders: updatedReminders })
            }
        })
        .catch(err => {
            console.log(err)
            const updatedReminders = getUpdatedReminders(id, 'weather', null)
            setReminders({ reminders: updatedReminders })
        })
    }

    const onReminderChange = (event, id, field) => {
        const { value } = event.target
        const updatedReminders = getUpdatedReminders(id, field, value)

        setReminders({ reminders: updatedReminders })
    }

    const onReminderDelete = id => {
        const updatedReminders = reminders.filter(reminder => reminder.id !== id)
        setReminders({ reminders: updatedReminders })
    }

    const closeReminderArea = () => setReminderAreaIsOpen({ reminderAreaIsOpen: false })

    return (
        <Calendar
            onDayClick={onDayClick}
            reminderAreaIsOpen={reminderAreaIsOpen}
            selectedDay={selectedDay}
            onAddReminder={onAddReminder}
            reminders={reminders}
            onReminderTitleChange={onReminderChange}
            onReminderHourChange={onReminderChange}
            onReminderCityChange={onReminderChange}
            onReminderColorChange={onReminderChange}
            onReminderDateChange={onReminderChange}
            onReminderDelete={onReminderDelete}
            onReminderAreaClose={closeReminderArea}
            includeCity
            includeWeather
            cities={cities}
        />
    )
};

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    setReminderAreaIsOpen,
    setSelectedDay,
    setReminders
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
