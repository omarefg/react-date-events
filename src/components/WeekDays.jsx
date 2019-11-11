import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/WeekDays.module.scss';

const renderWeekDays = (weekDays) => weekDays.map((day) => {
  if (typeof day === 'string') {
    return <th key={day}>{day}</th>;
  }
  const { value, id } = day;
  return <th key={id}>{value}</th>;
});

const WeekDays = (props) => {
  const { weekDays } = props;


  return (
    <tr className={styles['week-days__container']}>
      {renderWeekDays(weekDays)}
    </tr>
  );
};

WeekDays.propTypes = {
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
};

export default WeekDays;
