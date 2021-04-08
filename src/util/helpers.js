import moment from 'moment';
import { TemperatureTypes } from './constants';

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const getWeekDay = (d) => {
  return weekDays[d.getDay()];
};

export const getHourFromMS = (ms) => {
  return moment.utc(ms).format('HH:mm');
};

export const getCurrentHr = () => {
  return moment().format('HH');
};

export const getDaysArr = () => {
  const weekDaysClone = [...weekDays];
  const today = new Date();
  const todayInWeek = getWeekDay(today);
  const todayInWeekIndex = weekDaysClone.findIndex(
    (day) => day === todayInWeek
  );
  const beforeTodayInWeekIndexDays = weekDaysClone.splice(0, todayInWeekIndex);
  return [...weekDaysClone, ...beforeTodayInWeekIndexDays, todayInWeek];
};

export const getHoursArr = () => {
  const initVal = getCurrentHr();
  const items = [];
  const rest = 24 - initVal;
  for (let i = initVal; i < 24; i++) {
    items.push(moment({ hour: i }).format('HH:MM'));
  }
  for (let i = 0; i <= 24 - rest - 1; i++) {
    items.push(moment({ hour: i }).format('HH:MM'));
  }
  return items;
};

export const toSVGs = (reqSvgs) => {
  return reqSvgs.keys().reduce((images, path) => {
    const key = path.substring(
      path.lastIndexOf('/') + 1,
      path.lastIndexOf('.')
    );
    images[key] = reqSvgs(path).default;
    return images;
  }, {});
};

// type represents convToType
export const convertDegType = (type, degs) => {
  let res;
  // Celsius To => FAHRENHEIT
  if (type === TemperatureTypes.FAHRENHEIT) {
    res = degs * 1.8 + 32;
  } else {
    // FAHRENHEIT to => Celsius
    res = (degs - 32) / 1.8;
  }
  return res.toFixed(0);
};
