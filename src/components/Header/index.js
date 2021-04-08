import React from 'react';
import HeaderStyles from './index.module.css';
import { TemperatureTypes } from '../../util/constants';

const Header = ({ temperatureType, changeTemperatureType }) => {
  const temperatureChangeHandler = (type) => {
    changeTemperatureType(type);
  };

  const { CELSIUS, FAHRENHEIT } = TemperatureTypes;
  const { Header, Activated } = HeaderStyles;
  return (
    <div className={Header}>
      <h1>instaweather</h1>
      <div>
        <button
          className={temperatureType === CELSIUS ? Activated : undefined}
          onClick={() => temperatureChangeHandler(CELSIUS)}
        >
          {CELSIUS}
        </button>
        <button
          className={temperatureType === FAHRENHEIT ? Activated : undefined}
          onClick={() => temperatureChangeHandler(FAHRENHEIT)}
        >
          {FAHRENHEIT}
        </button>
      </div>
    </div>
  );
};

export default Header;
