const getFormattedHour = (hour) => {
  if (hour) {
    const date = new Date(hour);
    let dateHour = date.getHours();
    let dateMinutes = date.getMinutes();
    if (dateHour < 10) {
      dateHour = `0${dateHour}`;
    }
    if (dateMinutes < 10) {
      dateMinutes = `0${dateMinutes}`;
    }
    return `, ${dateHour}:${dateMinutes}`;
  }
  return '';
};

const validateIsSelected = (selectedDay, actualDay) => {
  if (selectedDay.date) {
    const selectedDayYear = selectedDay.date.getFullYear();
    const selectedDayMonth = selectedDay.date.getMonth();
    const selectedDayDay = selectedDay.date.getDate();
    const actualDayYear = actualDay.getFullYear();
    const actualDayMonth = actualDay.getMonth();
    const actualDayDay = actualDay.getDate();

    return `${selectedDayYear}-${selectedDayMonth}-${selectedDayDay}` === `${actualDayYear}-${actualDayMonth}-${actualDayDay}`;
  }

  return false;
};

const validateToday = (actualDay) => {
  const selectedDay = new Date();
  return validateIsSelected({ date: selectedDay }, actualDay);
};

const addNumberSuffix = (num) => {
  if (num === 1) {
    return 'st';
  }
  if (num === 2) {
    return 'nd';
  }
  if (num === 3) {
    return 'rd';
  }
  return 'th';
};

const format = {
  getFormattedHour,
  validateIsSelected,
  addNumberSuffix,
  validateToday,
};

export default format;
