import React from 'react';
import CurrentCityStyles from './index.module.css';
import cloudy from '../../svgs/partly-cloudy-day.svg';
import { getWeekDay } from '../../util/helpers';

const CurrentCity = () => {
  const today = new Date();
  // weekday, dd yyyy
  const todayFormatted = `${getWeekDay(
    today
  )}, ${today.getDate()} ${today.getFullYear()}`;
  return (
    <div className={CurrentCityStyles.Wrapper}>
      <div className="left">
        <h2>New Cairo</h2>
        <p className={CurrentCityStyles.Date}>{todayFormatted}</p>
        <img
          src={cloudy}
          alt="partly-cloudy-day"
          className={CurrentCityStyles.Logo}
        />
        <h4 className={CurrentCityStyles.CurrentCityText}>Cloudy</h4>
      </div>
      <div className="right">
        <h4 className={CurrentCityStyles.CurrentTempNoText}>
          72<sup>°</sup>
        </h4>
        <h5 className={CurrentCityStyles.HighLowDegreesWrapper}>
          <span className={CurrentCityStyles.High}>
            81<sup>°</sup>
          </span>
          <span>/</span>
          <span className={CurrentCityStyles.Low}>
            63<sup>°</sup>
          </span>
        </h5>
        <p className={CurrentCityStyles.StatusText}>
          Cloudy throughout the day
        </p>
      </div>
    </div>
  );
};

export default CurrentCity;
