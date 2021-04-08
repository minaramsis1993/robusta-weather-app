import React, { useEffect, useState } from 'react';
import CityDetailsStyles from './index.module.css';
import { ForecastTypes } from '../../util/constants';
import { toSVGs } from '../../util/helpers';

const CityDetails = (props) => {
  const [forecastType, setForecastType] = useState(ForecastTypes.HOURLY);
  const [forecastData, setForecastData] = useState([]);

  const reqSvgs = require.context('../../svgs', true, /\.svg$/);
  const svgs = toSVGs(reqSvgs);

  const { temperatureInfo } = props;

  const setType = (e, type) => {
    e.preventDefault();
    setForecastType(type);
  };

  useEffect(() => {
    const { HOURLY } = ForecastTypes;
    if (forecastType === HOURLY && temperatureInfo) {
      setForecastData(temperatureInfo?.adaptedHourly);
    } else {
      setForecastData(temperatureInfo?.adaptedDaily);
    }
  }, [forecastType, temperatureInfo]);

  const { DAILY, HOURLY } = ForecastTypes;
  const {
    Wrapper,
    Tabs,
    Activated,
    ResultsWrapper,
    ItemContainer,
    Time,
    Icon,
    Temp,
    HrLine
  } = CityDetailsStyles;
  return (
    <div className={Wrapper}>
      <div className={Tabs}>
        <button
          className={forecastType === HOURLY ? Activated : undefined}
          onClick={(e) => {
            setType(e, HOURLY);
          }}
          type="button"
        >
          Hourly
        </button>
        <button
          className={forecastType === DAILY ? Activated : undefined}
          onClick={(e) => {
            setType(e, DAILY);
          }}
          type="button"
        >
          Daily
        </button>
      </div>
      <div className={ResultsWrapper}>
        {forecastData &&
          forecastData.length &&
          forecastData.map((obj, index) => (
            <div className={ItemContainer} key={index}>
              {forecastType === HOURLY && (
                <span className={Time}>{index === 0 ? 'Now' : obj.hour}</span>
              )}
              {forecastType === DAILY && (
                <span className={Time}>
                  {index === 0 ? 'Today' : obj.weekDay}
                </span>
              )}
              <img src={svgs[obj.icon]} alt={obj.icon} className={Icon} />
              <p className={Temp}>
                {obj.apparentTemperature}
                <sup>°</sup>
              </p>
            </div>
          ))}
      </div>
      <div className={HrLine}></div>
    </div>
  );
};

export default CityDetails;
