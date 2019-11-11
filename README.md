# react-date-events
React component to create a calendar and add reminders to it.

# Example project

First you'll need to download the project.

``git clone git@github.com:omarefg/react-date-events.git``

Installation:

``yarn install``

or

``npm install``

## Run the project

``yarn start``

or

``npm start``

The local server will open on http://localhost:3021

# Install the package

## Installation

``npm install -S @omarefg/react-date-events``

or

``yarn install -S @omarefg/react-date-events``

## Usage

```jsx
    import React from 'react'
    import Calendar from '@omarefg/react-date-events'

    const Foo = () => {
        return (
            <Calendar/>
        )
    }
```

# Props API

<table>
<thead>
    <tr>
        <th>Prop</th>
        <th>Description</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default value</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>actualMonth</td>
        <td>Actual month in the calendar</td>
        <td>int (0 - 11)</td>
        <td>❌</td>
        <td>Actual month</td>
    </tr>
    <tr>
        <td>actualYear</td>
        <td>Actual year in the calendar</td>
        <td>int</td>
        <td>❌</td>
        <td>Actual year</td>
    </tr>
    <tr>
        <td>weekDays</td>
        <td>Array of strings or objects of the week days</td>
        <td>[string] || [object]</td>
        <td>❌</td>
        <td>['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']</td>
    </tr>
    <tr>
        <td>hourSelectValues</td>
        <td>Array of objects to fill the reminder hours select</td>
        <td>[object]</td>
        <td>❌</td>
        <td>[{hour: 0, minutes: 0, seconds: 0, id: 0 }] (From 0 to 23:30)</td>
    </tr>
    <tr>
        <td>selectedDay</td>
        <td>The selected day in the calendar to show in reminders area</td>
        <td>object</td>
        <td>❌</td>
        <td>{weekDay: '', month: '', day: '', year: '', date: '', id: '', reminders: []}</td>
    </tr>
    <tr>
        <td>reminderAreaIsOpen</td>
        <td>Boolean to tell if the reminders area is open</td>
        <td>boolean</td>
        <td>❌</td>
        <td>False</td>
    </tr>
    <tr>
        <td>onDayClick</td>
        <td>Callback to be called when the user click on a calendar day</td>
        <td>function</td>
        <td>❌</td>
        <td>({weekDay, month, day, year, date, id}) => null</td>
    </tr>
    <tr>
        <td>months</td>
        <td>Array of strings or objects of the months</td>
        <td>[string] || [object]</td>
        <td>❌</td>
        <td>['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']</td>
    </tr>
    <tr>
        <td>reminders</td>
        <td>Array of objects to fill the reminders, the reminders object must have the following fields: id, description, hour, date, weather</td>
        <td>[object]</td>
        <td>❌</td>
        <td>[]</td>
    </tr>
    <tr>
        <td>onAddReminder</td>
        <td>Callback to be called when the user click on the add a reminder button</td>
        <td>function</td>
        <td>❌</td>
        <td>(date) => null</td>
    </tr>
    <tr>
        <td>onReminderTitleChange</td>
        <td>Callback to be called when the user change the reminder title</td>
        <td>function</td>
        <td>❌</td>
        <td>(event, id, field) => null</td>
    </tr>
    <tr>
        <td>onReminderHourChange</td>
        <td>Callback to be called when the user change the reminder hour</td>
        <td>function</td>
        <td>❌</td>
        <td>(event, id, field) => null</td>
    </tr>
    <tr>
        <td>onReminderDelete</td>
        <td>Callback to be called when the user delete the reminder</td>
        <td>function</td>
        <td>❌</td>
        <td>(id) => null</td>
    </tr>
    <tr>
        <td>includeCity</td>
        <td>Boolean to include or not the city field in the reminder</td>
        <td>boolean</td>
        <td>❌</td>
        <td>False</td>
    </tr>
    <tr>
        <td>includeWeather</td>
        <td>Boolean to include or not the weather field in the reminder</td>
        <td>boolean</td>
        <td>❌</td>
        <td>False</td>
    </tr>
    <tr>
        <td>onReminderCityChange</td>
        <td>Callback to be called when the user change the reminder city</td>
        <td>function</td>
        <td>❌</td>
        <td>(event, id, field) => null</td>
    </tr>
    <tr>
        <td>onReminderColorChange</td>
        <td>Callback to be called when the user change the reminder city</td>
        <td>function</td>
        <td>❌</td>
        <td>({event: {target: value}}, id, field) => null</td>
    </tr>
    <tr>
        <td>onReminderAreaClose</td>
        <td>Callback to be called when the user change the reminder city</td>
        <td>function</td>
        <td>❌</td>
        <td>(event) => null</td>
    </tr>
    <tr>
        <td>onReminderDateChange</td>
        <td>Callback to be called when the user change the reminder date</td>
        <td>function</td>
        <td>❌</td>
        <td>({event: {target: value}}, id, field) => null</td>
    </tr>
    <tr>
        <td>cities</td>
        <td>Array of cities to fill the reminder cities select</td>
        <td>[object]</td>
        <td>❌</td>
        <td>[]</td>
    </tr>
</tbody>
</table>