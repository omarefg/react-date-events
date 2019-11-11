import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import Container from './components/Container';
import theme from './theme';

const Calendar = (props) => {
  const {
    actualMonth,
    actualYear,
    weekDays,
    hourSelectValues,
    selectedDay,
    reminderAreaIsOpen,
    onDayClick,
    months,
    reminders,
    onAddReminder,
    onReminderTitleChange,
    onReminderHourChange,
    onReminderDelete,
    includeCity,
    includeWeather,
    onReminderCityChange,
    onReminderColorChange,
    onReminderAreaClose,
    onReminderDateChange,
    cities,
  } = props;

  const [internActualYear, setInternActualYear] = useState(actualYear);
  const [internActualMonth, setInternActualMonth] = useState(actualMonth);

  const nextMonthHandler = () => {
    let nextMonth = internActualMonth + 1;
    if (internActualMonth > 10) {
      nextMonth = 0;
      const nextYear = internActualYear + 1;
      setInternActualYear(nextYear);
    }
    setInternActualMonth(nextMonth);
  };

  const prevMonthHandler = () => {
    let prevMonth = internActualMonth - 1;
    if (internActualMonth < 1) {
      prevMonth = 11;
      const prevYear = internActualYear - 1;
      setInternActualYear(prevYear);
    }
    setInternActualMonth(prevMonth);
  };

  return (
    <MuiThemeProvider
      theme={theme}
    >
      <Container
        actualYear={internActualYear}
        actualMonth={internActualMonth}
        weekDays={weekDays}
        hourSelectValues={hourSelectValues}
        selectedDay={selectedDay}
        reminderAreaIsOpen={reminderAreaIsOpen}
        onDayClick={onDayClick}
        months={months}
        reminders={reminders}
        onAddReminder={onAddReminder}
        onReminderTitleChange={onReminderTitleChange}
        onReminderHourChange={onReminderHourChange}
        onReminderDelete={onReminderDelete}
        includeCity={includeCity}
        onReminderCityChange={onReminderCityChange}
        onReminderColorChange={onReminderColorChange}
        onReminderAreaClose={onReminderAreaClose}
        onReminderDateChange={onReminderDateChange}
        cities={cities}
        includeWeather={includeWeather}
        nextMonthHandler={nextMonthHandler}
        prevMonthHandler={prevMonthHandler}
      />
    </MuiThemeProvider>
  );
};

Calendar.propTypes = {
  actualMonth: PropTypes.number,
  actualYear: PropTypes.number,
  weekDays: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      value: PropTypes.string,
    })),
  ]),
  months: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      value: PropTypes.string,
    })),
  ]),
  hourSelectValues: PropTypes.arrayOf(PropTypes.shape({
    hour: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })),
  selectedDay: PropTypes.shape({
    weekDay: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, '']),
    month: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '']),
    day: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, '']),
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([''])]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  reminders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    title: PropTypes.string,
    hour: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['']),
    ]),
    date: PropTypes.instanceOf(Date),
    color: PropTypes.string,
    city: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    weather: PropTypes.oneOfType([PropTypes.shape({
      temp: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
    }), PropTypes.oneOf([null])]),
  })),
  reminderAreaIsOpen: PropTypes.bool,
  onDayClick: PropTypes.func,
  onAddReminder: PropTypes.func,
  onReminderTitleChange: PropTypes.func,
  onReminderHourChange: PropTypes.func,
  onReminderDelete: PropTypes.func,
  onReminderCityChange: PropTypes.func,
  onReminderColorChange: PropTypes.func,
  includeCity: PropTypes.bool,
  includeWeather: PropTypes.bool,
  onReminderAreaClose: PropTypes.func,
  onReminderDateChange: PropTypes.func,
  cities: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({}), PropTypes.number]),
  })),
};

Calendar.defaultProps = {
  actualMonth: new Date().getMonth(),
  actualYear: new Date().getFullYear(),
  weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  hourSelectValues: [
    {
      hour: 0,
      minutes: 0,
      seconds: 0,
      id: 0,
    },
    {
      hour: 0,
      minutes: 30,
      seconds: 0,
      id: 1,
    },
    {
      hour: 1,
      minutes: 0,
      seconds: 0,
      id: 2,
    },
    {
      hour: 1,
      minutes: 30,
      seconds: 0,
      id: 3,
    },
    {
      hour: 2,
      minutes: 0,
      seconds: 0,
      id: 4,
    },
    {
      hour: 2,
      minutes: 30,
      seconds: 0,
      id: 5,
    },
    {
      hour: 3,
      minutes: 0,
      seconds: 0,
      id: 6,
    },
    {
      hour: 3,
      minutes: 30,
      seconds: 0,
      id: 7,
    },
    {
      hour: 4,
      minutes: 0,
      seconds: 0,
      id: 8,
    },
    {
      hour: 4,
      minutes: 30,
      seconds: 0,
      id: 9,
    },
    {
      hour: 5,
      minutes: 0,
      seconds: 0,
      id: 10,
    },
    {
      hour: 5,
      minutes: 30,
      seconds: 0,
      id: 11,
    },
    {
      hour: 6,
      minutes: 0,
      seconds: 0,
      id: 12,
    },
    {
      hour: 6,
      minutes: 30,
      seconds: 0,
      id: 13,
    },
    {
      hour: 7,
      minutes: 0,
      seconds: 0,
      id: 14,
    },
    {
      hour: 7,
      minutes: 30,
      seconds: 0,
      id: 15,
    },
    {
      hour: 8,
      minutes: 0,
      seconds: 0,
      id: 16,
    },
    {
      hour: 8,
      minutes: 30,
      seconds: 0,
      id: 17,
    },
    {
      hour: 9,
      minutes: 0,
      seconds: 0,
      id: 18,
    },
    {
      hour: 9,
      minutes: 30,
      seconds: 0,
      id: 19,
    },
    {
      hour: 10,
      minutes: 0,
      seconds: 0,
      id: 20,
    },
    {
      hour: 10,
      minutes: 30,
      seconds: 0,
      id: 21,
    },
    {
      hour: 11,
      minutes: 0,
      seconds: 0,
      id: 22,
    },
    {
      hour: 11,
      minutes: 30,
      seconds: 0,
      id: 23,
    },
    {
      hour: 12,
      minutes: 0,
      seconds: 0,
      id: 24,
    },
    {
      hour: 12,
      minutes: 30,
      seconds: 0,
      id: 25,
    },
    {
      hour: 13,
      minutes: 0,
      seconds: 0,
      id: 26,
    },
    {
      hour: 13,
      minutes: 30,
      seconds: 0,
      id: 27,
    },
    {
      hour: 14,
      minutes: 0,
      seconds: 0,
      id: 28,
    },
    {
      hour: 14,
      minutes: 30,
      seconds: 0,
      id: 29,
    },
    {
      hour: 15,
      minutes: 0,
      seconds: 0,
      id: 30,
    },
    {
      hour: 15,
      minutes: 30,
      seconds: 0,
      id: 31,
    },
    {
      hour: 16,
      minutes: 0,
      seconds: 0,
      id: 32,
    },
    {
      hour: 16,
      minutes: 30,
      seconds: 0,
      id: 33,
    },
    {
      hour: 17,
      minutes: 0,
      seconds: 0,
      id: 34,
    },
    {
      hour: 17,
      minutes: 30,
      seconds: 0,
      id: 35,
    },
    {
      hour: 18,
      minutes: 0,
      seconds: 0,
      id: 36,
    },
    {
      hour: 18,
      minutes: 30,
      seconds: 0,
      id: 37,
    },
    {
      hour: 19,
      minutes: 0,
      seconds: 0,
      id: 38,
    },
    {
      hour: 19,
      minutes: 30,
      seconds: 0,
      id: 39,
    },
    {
      hour: 20,
      minutes: 0,
      seconds: 0,
      id: 40,
    },
    {
      hour: 20,
      minutes: 30,
      seconds: 0,
      id: 41,
    },
    {
      hour: 21,
      minutes: 0,
      seconds: 0,
      id: 42,
    },
    {
      hour: 21,
      minutes: 30,
      seconds: 0,
      id: 43,
    },
    {
      hour: 22,
      minutes: 0,
      seconds: 0,
      id: 44,
    },
    {
      hour: 22,
      minutes: 30,
      seconds: 0,
      id: 45,
    },
    {
      hour: 23,
      minutes: 0,
      seconds: 0,
      id: 46,
    },
    {
      hour: 23,
      minutes: 30,
      seconds: 0,
      id: 47,
    },
  ],
  selectedDay: {
    weekDay: '',
    month: '',
    day: '',
    year: '',
    date: '',
    id: '',
    reminders: [],
  },
  reminders: [],
  reminderAreaIsOpen: false,
  onDayClick: () => null,
  onAddReminder: () => null,
  onReminderTitleChange: () => null,
  onReminderHourChange: () => null,
  onReminderDelete: () => null,
  onReminderCityChange: () => null,
  onReminderColorChange: () => null,
  onReminderAreaClose: () => null,
  onReminderDateChange: () => null,
  includeCity: false,
  includeWeather: false,
  cities: [],
};

export default Calendar;
