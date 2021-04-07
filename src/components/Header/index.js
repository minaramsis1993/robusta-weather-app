import React from 'react';
import HeaderStyles from './index.module.css';
import { TemperatureTypes } from '../../util/constants';

const Header = ({ temperatureType, changeTemperatureType }) => {
  const temperatureChangeHandler = (type) => {
    changeTemperatureType(type);
  };

  const { CELSIUS, FAHRENHEIT } = TemperatureTypes;

  return (
    <div className={HeaderStyles.Header}>
      <h1>instaweather</h1>
      <div className="btns-wrapper">
        <button
          className={
            temperatureType === CELSIUS ? HeaderStyles.Activated : undefined
          }
          onClick={() => temperatureChangeHandler(CELSIUS)}
        >
          {CELSIUS}
        </button>
        <button
          className={
            temperatureType === FAHRENHEIT ? HeaderStyles.Activated : undefined
          }
          onClick={() => temperatureChangeHandler(FAHRENHEIT)}
        >
          {FAHRENHEIT}
        </button>
      </div>
    </div>
  );
};

export default Header;
