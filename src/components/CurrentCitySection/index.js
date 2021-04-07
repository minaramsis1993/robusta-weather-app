import React, { useEffect, useState } from 'react';
import CurrentCityStyles from './index.module.css';
import { getWeekDay } from '../../util/helpers';

const CurrentCity = (props) => {
  let [icon, setIcon] = useState('');
  const { currentCityData } = props;
  const today = new Date();
  const todayFormatted = `${getWeekDay(
    today
  )}, ${today.getDate()} ${today.getFullYear()}`;

  // icon name is the path for svg icon
  useEffect(() => {
    async function getIcon() {
      let importedIcon = await import(
        `../../svgs/${currentCityData?.icon}.svg`
      );
      setIcon(importedIcon.default);
    }
    if (currentCityData?.icon) {
      getIcon();
    }
  }, [currentCityData]);

  return (
    <div className={CurrentCityStyles.Wrapper}>
      <div className="left">
        <h2>New Cairo</h2>
        <p className={CurrentCityStyles.Date}>{todayFormatted}</p>
        {icon.length && (
          <img
            className={CurrentCityStyles.Logo}
            src={icon}
            alt={currentCityData?.icon}
          />
        )}
        <h4 className={CurrentCityStyles.CurrentCityText}>
          {currentCityData?.shortSummary}
        </h4>
      </div>
      <div className="right">
        <h4 className={CurrentCityStyles.CurrentTempNoText}>
          {currentCityData?.apparentTemperature}
          <sup>°</sup>
        </h4>
        <h5 className={CurrentCityStyles.HighLowDegreesWrapper}>
          <span className={CurrentCityStyles.High}>
            {currentCityData?.apparentTemperatureHigh}
            <sup>°</sup>
          </span>
          <span>/</span>
          <span className={CurrentCityStyles.Low}>
            {currentCityData?.apparentTemperatureLow}
            <sup>°</sup>
          </span>
        </h5>
        <p className={CurrentCityStyles.StatusText}>
          {currentCityData?.summary}
        </p>
      </div>
    </div>
  );
};

export default CurrentCity;
