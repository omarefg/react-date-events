import { useEffect, useState } from 'react';

const useMonthDays = (month, year) => {
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const used = firstDay + daysInMonth;
    const weeksCount = Math.ceil(used / 7);
    const monthDays = [];
    const lastMonth = month - 1;
    const daysInLastMonth = 32 - new Date(year, lastMonth, 32).getDate();
    const nextMonth = month + 1;
    let date = 0;
    let nextMonthDay = 1;

    for (let w = 0; w < weeksCount; w += 1) {
      for (let d = 0; d < 7; d += 1) {
        const lastMonthDay = daysInLastMonth - firstDay + 1 + d;
        const lastMonthDateObject = {
          value: lastMonthDay,
          id: `${year}-${lastMonth}-${lastMonthDay}`,
          isOtherMonth: true,
          weekDay: d,
          month: lastMonth,
          year,
          date: new Date(year, lastMonth, lastMonthDay),
        };

        if (w === 0 && d < firstDay) {
          monthDays[w] = monthDays[w]
            ? { ...monthDays[w], days: [...monthDays[w].days, lastMonthDateObject] }
            : { days: [lastMonthDateObject], id: `${year}-${lastMonth}-Week:${w}` };
        }

        if (w === weeksCount - 1 && date > daysInMonth) {
          const nextMonthDateObject = {
            value: nextMonthDay,
            id: `${year}-${nextMonth}-${nextMonthDay}`,
            isOtherMonth: true,
            weekDay: d,
            month: nextMonth,
            year,
            date: new Date(year, nextMonth, nextMonthDay),
          };
          monthDays[w] = monthDays[w]
            ? { ...monthDays[w], days: [...monthDays[w].days, nextMonthDateObject] }
            : { days: [nextMonthDateObject], id: `${year}-${nextMonth}-Week:${w}` };
          nextMonthDay += 1;
        }

        if ((d >= firstDay && w === 0) || (date < daysInMonth && w !== 0)) {
          date += 1;
          const dateObject = {
            value: date,
            id: `${year}-${month}-${date}`,
            isOtherMonth: false,
            weekDay: d,
            month,
            year,
            date: new Date(year, month, date),
          };
          monthDays[w] = monthDays[w]
            ? { ...monthDays[w], days: [...monthDays[w].days, dateObject] }
            : { days: [dateObject], id: `${year}-${month}-Week:${w}` };
          if (date === daysInMonth) {
            date += 1;
          }
        }
      }
    }
    setCalendarDays(monthDays);
  }, [year, month]);

  return calendarDays;
};

export default useMonthDays;
