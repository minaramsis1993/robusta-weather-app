import moment from 'moment';

export const getWeekDay = (d) => {
  const weekday = [];
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';
  return weekday[d.getDay()];
};

export const getHourFromMS = (ms) => {
  return moment.utc(ms).format('HH:mm');
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
