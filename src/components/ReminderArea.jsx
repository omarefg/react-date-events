import React from 'react';
import PropTypes from 'prop-types';
import Reminder from './Reminder';
import Add from '../icons/Add';
import CloseReminderArea from '../icons/CloseReminderArea';
import format from '../utils/format';

import styles from '../styles/ReminderArea.module.scss';

const { addNumberSuffix } = format;

const ReminderArea = (props) => {
  const {
    selectedDay,
    hourSelectValues,
    months,
    weekDays,
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
  } = props;

  const {
    weekDay,
    month,
    day,
    date,
  } = selectedDay;

  const addReminder = () => onAddReminder(new Date(date));

  const closeReminderArea = (event) => onReminderAreaClose(event);

  return (
    <div
      className={styles['reminder-area__container']}
    >
      <button
        className={styles['reminder-area__close-button']}
        type="button"
        onClick={closeReminderArea}
      >
        <CloseReminderArea
          size="2.5em"
        />
      </button>
      <div
        className={styles['reminder-area__title']}
      >
        <h1>{weekDays[weekDay]}</h1>
        <h3>{`${months[month]} - ${day}${addNumberSuffix(day)}`}</h3>
      </div>
      <div
        className={styles['reminder-area__reminders-container']}
      >
        {reminders.length
          ? reminders
            .filter(({ date: reminderDate }) => reminderDate.getTime() === date.getTime())
            .map((reminder) => (
              <Reminder
                key={reminder.id}
                hour={reminder.hour}
                title={reminder.title}
                hourSelectValues={hourSelectValues}
                date={date}
                onReminderTitleChange={onReminderTitleChange}
                onReminderHourChange={onReminderHourChange}
                onReminderDelete={onReminderDelete}
                id={reminder.id}
                includeCity={includeCity}
                onReminderCityChange={onReminderCityChange}
                city={reminder.city}
                color={reminder.color}
                onReminderColorChange={onReminderColorChange}
                reminderDate={reminder.date}
                onReminderDateChange={onReminderDateChange}
                cities={cities}
                includeWeather={includeWeather}
                weather={reminder.weather}
              />
            )) : <h2>Add a Reminder</h2>}
      </div>
      <button
        className={styles['reminder-area__add-button']}
        type="button"
        onClick={addReminder}
      >
        <Add
          size="4em"
        />
      </button>
    </div>
  );
};

ReminderArea.propTypes = {
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
  onAddReminder: PropTypes.func.isRequired,
  onReminderTitleChange: PropTypes.func.isRequired,
  onReminderHourChange: PropTypes.func.isRequired,
  onReminderDelete: PropTypes.func.isRequired,
  onReminderCityChange: PropTypes.func.isRequired,
  onReminderColorChange: PropTypes.func.isRequired,
  onReminderAreaClose: PropTypes.func.isRequired,
  onReminderDateChange: PropTypes.func.isRequired,
  includeCity: PropTypes.bool.isRequired,
  includeWeather: PropTypes.bool.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({}), PropTypes.number]),
  })).isRequired,
};

export default ReminderArea;
