import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import format from '../utils/format';

import styles from '../styles/Day.module.scss';

const { getFormattedHour } = format;


const Day = (props) => {
  const {
    day,
    weekDay,
    isOtherMonth,
    onDayClick,
    id,
    month,
    year,
    date,
    reminders,
  } = props;

  const cx = classNames.bind(styles);

  const icon = cx({
    day__container: true,
    'day__container--is-weekend': weekDay === 0 || weekDay === 6,
    'day__container--otherMonth': isOtherMonth,
  });

  const onClick = () => onDayClick({
    weekDay,
    month,
    day,
    year,
    date,
    id,
  });

  return (
    <td
      className={icon}
    >
      <button
        onClick={onClick}
        type="button"
        className={styles['day--button']}
      >
        <span>
          {day}
        </span>
        <div
          className={styles['day__reminders-container']}
        >
          {reminders.slice(0, 2).map((reminder) => (
            <p
              key={reminder.id}
              style={{ backgroundColor: reminder.color || '#f44336' }}
              title={reminder.title}
            >
              {reminder.title}
              {getFormattedHour(reminder.hour)}
            </p>
          ))}
          {reminders.length > 2
          && (
          <p
            title={`${reminders.length - 2} ${reminders.length - 2 > 1 ? ' more reminders' : ' more reminder'}`}
          >
            {reminders.length - 2}
            {reminders.length - 2 > 1 ? ' more reminders' : ' more reminder'}
          </p>
          )}
        </div>
      </button>
    </td>
  );
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
  weekDay: PropTypes.number.isRequired,
  isOtherMonth: PropTypes.bool.isRequired,
  onDayClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
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
};

export default Day;
