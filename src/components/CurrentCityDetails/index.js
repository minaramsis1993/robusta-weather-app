import React, { useState } from 'react';
import CityDetailsStyles from './index.module.css';
import { ForecastTypes } from '../../util/constants';
import { toSVGs } from '../../util/helpers';

const CityDetails = (props) => {
  const [forecastType, setForecastType] = useState(ForecastTypes.HOURLY);
  const reqSvgs = require.context('../../svgs', true, /\.svg$/);
  const svgs = toSVGs(reqSvgs);

  const { temperatureInfo } = props;

  const { DAILY, HOURLY } = ForecastTypes;
  return (
    <div className={CityDetailsStyles.Wrapper}>
      <div className={CityDetailsStyles.Tabs}>
        <button
          className={
            forecastType === HOURLY ? CityDetailsStyles.Activated : undefined
          }
          onClick={() => setForecastType(HOURLY)}
        >
          Hourly
        </button>
        <button
          className={
            forecastType === DAILY ? CityDetailsStyles.Activated : undefined
          }
          onClick={() => setForecastType(DAILY)}
        >
          Daily
        </button>
      </div>
      <div className={CityDetailsStyles.ResultsWrapper}>
        {forecastType === ForecastTypes.HOURLY &&
          temperatureInfo?.adaptedHourly &&
          temperatureInfo?.adaptedHourly.map((obj, index) => (
            <div className={CityDetailsStyles.ItemContainer} key={index}>
              <span className={CityDetailsStyles.Time}>{obj.hour}</span>
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
