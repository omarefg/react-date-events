import React from 'react';
import PropTypes from 'prop-types';
import Month from './Month';
import ReminderArea from './ReminderArea';

import styles from '../styles/Container.module.scss';

const Container = (props) => {
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
    onReminderCityChange,
    onReminderColorChange,
    onReminderAreaClose,
    onReminderDateChange,
    cities,
    includeWeather,
    nextMonthHandler,
    prevMonthHandler,
  } = props;

  return (
    <div
      className={styles.container}
    >
      {reminderAreaIsOpen && (
        <ReminderArea
          hourSelectValues={hourSelectValues}
          selectedDay={selectedDay}
          months={months}
          weekDays={weekDays}
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
        />
      )}
      <Month
        actualMonth={actualMonth}
        actualYear={actualYear}
        weekDays={weekDays}
        onDayClick={onDayClick}
        selectedDay={selectedDay}
        reminders={reminders}
        nextMonthHandler={nextMonthHandler}
        prevMonthHandler={prevMonthHandler}
        months={months}
      />
    </div>
  );
};

Container.propTypes = {
  actualMonth: PropTypes.number.isRequired,
  actualYear: PropTypes.number.isRequired,
  weekDays: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      value: PropTypes.string,
    })),
  ]).isRequired,
  hourSelectValues: PropTypes.arrayOf(PropTypes.shape({
    hour: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
  selectedDay: PropTypes.shape({
    weekDay: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, '']),
    month: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '']),
    day: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, '']),
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([''])]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
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
  })).isRequired,
  reminderAreaIsOpen: PropTypes.bool.isRequired,
  onDayClick: PropTypes.func.isRequired,
  onAddReminder: PropTypes.func.isRequired,
  onReminderTitleChange: PropTypes.func.isRequired,
  onReminderHourChange: PropTypes.func.isRequired,
  onReminderDelete: PropTypes.func.isRequired,
  onReminderCityChange: PropTypes.func.isRequired,
  onReminderColorChange: PropTypes.func.isRequired,
  onReminderAreaClose: PropTypes.func.isRequired,
  onReminderDateChange: PropTypes.func.isRequired,
  nextMonthHandler: PropTypes.func.isRequired,
  prevMonthHandler: PropTypes.func.isRequired,
  months: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      value: PropTypes.string,
    })),
  ]).isRequired,
  includeCity: PropTypes.bool.isRequired,
  includeWeather: PropTypes.bool.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({}), PropTypes.number]),
  })).isRequired,
};

export default Container;
