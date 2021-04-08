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

  const {
    Wrapper,
    Left,
    Logo,
    CurrentCityText,
    Right,
    CurrentTempNoText,
    HighLowDegreesWrapper,
    High,
    Low,
    StatusText
  } = CurrentCityStyles;
  return (
    <div className={Wrapper}>
      <div className={Left}>
        <h2>New Cairo</h2>
        <p className={CurrentCityStyles.Date}>{todayFormatted}</p>
        {icon.length && (
          <img className={Logo} src={icon} alt={currentCityData?.icon} />
        )}
        <h4 className={CurrentCityText}>{currentCityData?.shortSummary}</h4>
      </div>
      <div className={Right}>
        <h4 className={CurrentTempNoText}>
          {currentCityData?.apparentTemperature}
          <sup>°</sup>
        </h4>
        <h5 className={HighLowDegreesWrapper}>
          <span className={High}>
            {currentCityData?.apparentTemperatureHigh}
            <sup>°</sup>
          </span>
          <span>/</span>
          <span className={Low}>
            {currentCityData?.apparentTemperatureLow}
            <sup>°</sup>
          </span>
        </h5>
        <p className={StatusText}>{currentCityData?.summary}</p>
      </div>
    </div>
  );
};

export default CurrentCity;
