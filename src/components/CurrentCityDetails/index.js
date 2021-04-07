import React, { useState } from 'react';
import CityDetailsStyles from './index.module.css';
import { ForecastTypes } from '../../util/constants';
import { toSVGs } from '../../util/helpers';

const CityDetails = (props) => {
  const [forecastType, setForecastType] = useState(ForecastTypes.HOURLY);
  const reqSvgs = require.context('../../svgs', true, /\.svg$/);
  const svgs = toSVGs(reqSvgs);

  const { temperatureInfo } = props;

  const setType = (e, type) => {
    e.preventDefault();
    setForecastType(type);
  };

  const { DAILY, HOURLY } = ForecastTypes;
  return (
    <div className={CityDetailsStyles.Wrapper}>
      <div className={CityDetailsStyles.Tabs}>
        <button
          className={
            forecastType === HOURLY ? CityDetailsStyles.Activated : undefined
          }
          onClick={(e) => {
            setType(e, HOURLY);
          }}
          type="button"
        >
          Hourly
        </button>
        <button
          className={
            forecastType === DAILY ? CityDetailsStyles.Activated : undefined
          }
          onClick={(e) => {
            setType(e, DAILY);
          }}
          type="button"
        >
          Daily
        </button>
      </div>
      <div className={CityDetailsStyles.ResultsWrapper}>
        {forecastType === ForecastTypes.HOURLY &&
          temperatureInfo?.adaptedHourly &&
          temperatureInfo?.adaptedHourly.map((obj, index) => (
            <div className={CityDetailsStyles.ItemContainer} key={index}>
              <span className={CityDetailsStyles.Time}>
                {index === 0 ? 'Now' : obj.hour}
              </span>
              <img
                src={svgs[obj.icon]}
                alt={obj.icon}
                className={CityDetailsStyles.Icon}
              />
              <p className={CityDetailsStyles.Temp}>
                {obj.apparentTemperature}
                <sup>°</sup>
              </p>
            </div>
          ))}
        {forecastType === DAILY &&
          temperatureInfo?.adaptedHourly &&
          temperatureInfo?.adaptedDaily.map((obj, index) => (
            <div className={CityDetailsStyles.ItemContainer} key={index}>
              <span className={CityDetailsStyles.Time}>
                {index === 0 ? 'Today' : obj.weekDay}
              </span>
              <img
                src={svgs[obj.icon]}
                alt={obj.icon}
                className={CityDetailsStyles.Icon}
              />
              <p className={CityDetailsStyles.Temp}>
                {obj.apparentTemperature}
                <sup>°</sup>
              </p>
            </div>
          ))}
      </div>
      <div className={CityDetailsStyles.HrLine}></div>
    </div>
  );
};

export default CityDetails;
