import React from 'react';
import PropTypes from 'prop-types';
import useMonthDays from '../hooks/useMonthDays';
import Day from './Day';
import WeekDays from './WeekDays';

import styles from '../styles/Month.module.scss';

const Month = (props) => {
  const {
    actualMonth,
    actualYear,
    weekDays,
    onDayClick,
    selectedDay,
    reminders,
  } = props;

  const calendarDays = useMonthDays(actualMonth, actualYear);

  return (
    <table
      className={styles.container__table}
    >
      <thead>
        <WeekDays
          weekDays={weekDays}
        />
      </thead>
      <tbody>
        {calendarDays.map(({ id, days }) => (
          <tr
            key={id}
          >
            {days.map((day) => {
              const {
                id: dayId,
                value,
                weekDay,
                isOtherMonth,
                month: dayMonth,
                year: dayYear,
                date: dayDate,
              } = day;

              return (
                <Day
                  key={dayId}
                  weekDay={weekDay}
                  isOtherMonth={isOtherMonth}
                  onDayClick={onDayClick}
                  id={dayId}
                  month={dayMonth}
                  year={dayYear}
                  date={dayDate}
                  selectedDay={selectedDay}
                  day={value}
                  reminders={reminders
                    .filter((reminder) => reminder.date.getTime() === dayDate.getTime())
                    .sort((a, b) => new Date(a.hour) - new Date(b.hour))}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Month.propTypes = {
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
  onDayClick: PropTypes.func.isRequired,
  selectedDay: PropTypes.shape({
    weekDay: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, '']),
    month: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, '']),
    day: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, '']),
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([''])]),
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([''])]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    reminders: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      description: PropTypes.string,
      hour: PropTypes.instanceOf(Date),
    })),
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
};

export default Month;
