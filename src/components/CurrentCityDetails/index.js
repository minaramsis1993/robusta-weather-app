import React from 'react';
import CityDetailsStyles from './index.module.css';
import partlyCloudyDay from '../../svgs/partly-cloudy-day.svg';
// import clearDay from '../../svgs/clear-day.svg';
// import clearNight from '../../svgs/clear-night.svg';
// import partlyCloudyNight from '../../svgs/partly-cloudy-night.svg';

const CityDetails = () => {
  const mockData = [
    { time: 'Now', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 88, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 45, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 77, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 78, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 79, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' },
    { time: '11:00', temp: 81, icon: partlyCloudyDay, iconAlt: 'Alt' }
  ];
  // TODO: Let's render the correct icon later
  return (
    <div className={CityDetailsStyles.Wrapper}>
      <div className={CityDetailsStyles.Tabs}>
        <button className={CityDetailsStyles.Activated}>Hourly</button>
        <button>Daily</button>
      </div>
      <div className={CityDetailsStyles.ResultsWrapper}>
        {mockData.map((obj, index) => (
          <div className={CityDetailsStyles.ItemContainer} key={index}>
            <span className={CityDetailsStyles.Time}>{obj.time}</span>
            <img
              src={obj.icon}
              alt={obj.iconAlt}
              className={CityDetailsStyles.Icon}
            />
            <p className={CityDetailsStyles.Temp}>
              {obj.temp}
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
