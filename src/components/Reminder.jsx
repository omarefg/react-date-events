import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { CirclePicker } from 'react-color';
import Select from './Select';
import TextInput from './TextInput';
import Delete from '../icons/Delete';

import styles from '../styles/Reminder.module.scss';


const Reminder = (props) => {
  const {
    title,
    hour,
    hourSelectValues,
    date,
    id,
    onReminderTitleChange,
    onReminderHourChange,
    onReminderDelete,
    city,
    includeCity,
    onReminderCityChange,
    color,
    onReminderColorChange,
    reminderDate,
    onReminderDateChange,
    cities,
    weather,
    includeWeather,
  } = props;

  const [colorsAreOpen, setColorsAreOpen] = useState(false);

  const titleHandler = (event) => onReminderTitleChange(event, id, 'title');

  const hourHandler = (event) => onReminderHourChange(event, id, 'hour');

  const deleteHandler = () => onReminderDelete(id);

  const cityHandler = (event) => onReminderCityChange(event, id, 'city');

  const toggleColorsAreOpen = () => setColorsAreOpen(!colorsAreOpen);

  const colorChangeHandler = ({ hex }) => onReminderColorChange({ target: { value: hex } }, id, 'color');

  const reminderDateHandler = (value) => onReminderDateChange({ target: { value } }, id, 'date');

  const hourSelectOptions = hourSelectValues.map((item) => {
    const {
      hour: itemHour, minutes, seconds, id: itemId,
    } = item;
    return {
      value: new Date(new Date(date).setHours(itemHour, minutes, seconds)).getTime(),
      label: `${itemHour < 10 ? `0${itemHour}` : itemHour}:${minutes < 10 ? `0${minutes}` : minutes}`,
      id: itemId,
    };
  });

  return (
    <div
      className={styles.reminder__container}
    >
      <button
        type="button"
        className={styles['reminder__delete-button']}
        onClick={deleteHandler}
      >
        <Delete
          size="2em"
        />
      </button>
      <div
        className={styles['reminder__inputs-container']}
      >
        <div
          className={styles['reminder__inputs-container__superior']}
        >
          <TextInput
            value={title}
            onChange={titleHandler}
            multiline
            rowsMax="4"
            inputProps={{
              maxLength: 30,
            }}
            label="Title"
          />
          <Select
            labelId={`reminder-hour-${id}`}
            value={hour}
            onChange={hourHandler}
            options={hourSelectOptions}
            label="Hour"
            className="hourFormControl"
          />
        </div>
        {includeCity && (
        <Select
          labelId={`reminder-city-${id}`}
          value={city}
          onChange={cityHandler}
          options={cities}
          label="City"
          className="cityFormControl"
        />
        )}
        {includeWeather && (
          <div className={styles['reminder__date-container']}>
            <p>Weather Information:</p>
            {weather ? (
              <div>
                <img alt="weather" src={weather.icon} />
                <p>
                  Temp:
                  {' '}
                  {weather.temp}
                  °F
                </p>
                <p>
                  {weather.title}
                  ,
                  {' '}
                  {weather.description}
                </p>
              </div>
            ) : (
              <p>No weather information.</p>
            )}
          </div>
        )}
        <div
          className={styles['reminder__colors-container']}
        >
          <div
            className={styles['reminder__color-button--container']}
            style={{ backgroundColor: color }}
            onClick={toggleColorsAreOpen}
            role="presentation"
          />
          {colorsAreOpen && (
            <CirclePicker
              color={color}
              circleSize={12}
              circleSpacing={7}
              width="126px"
              onChange={colorChangeHandler}
            />
          )}
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            disableToolbar
            variant="inline"
            label="Date"
            value={reminderDate}
            onChange={reminderDateHandler}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

Reminder.propTypes = {
  hourSelectValues: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.instanceOf(Date),
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  })).isRequired,
  title: PropTypes.string,
  city: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hour: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['']),
  ]),
  date: PropTypes.instanceOf(Date).isRequired,
  reminderDate: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onReminderTitleChange: PropTypes.func.isRequired,
  onReminderHourChange: PropTypes.func.isRequired,
  onReminderDelete: PropTypes.func.isRequired,
  onReminderCityChange: PropTypes.func.isRequired,
  onReminderColorChange: PropTypes.func.isRequired,
  onReminderDateChange: PropTypes.func.isRequired,
  includeCity: PropTypes.bool.isRequired,
  includeWeather: PropTypes.bool.isRequired,
  color: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({}), PropTypes.number]),
  })).isRequired,
  weather: PropTypes.oneOfType([PropTypes.shape({
    temp: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
  }), PropTypes.oneOf([null])]),
};

Reminder.defaultProps = {
  title: '',
  hour: '',
  id: '',
  city: '',
  color: '#f44336',
  weather: null,
};

export default Reminder;
