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

const format = {
  getFormattedHour,
};

export default format;
