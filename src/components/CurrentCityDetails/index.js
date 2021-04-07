import React from 'react';
import CityDetailsStyles from './index.module.css';
import clearDay from '../../svgs/clear-day.svg';
import clearNight from '../../svgs/clear-night.svg';
import partlyCloudyDay from '../../svgs/partly-cloudy-day.svg';
import partlyCloudyNight from '../../svgs/partly-cloudy-night.svg';

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
        {mockData.map((obj) => (
          <div className={CityDetailsStyles.ItemContainer}>
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
      <p style={{ paddingTop: '3rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quidem
        dignissimos iure doloremque dolorum laudantium ullam accusantium,
        exercitationem veritatis rem eligendi voluptate minus voluptates
        asperiores distinctio sunt. Maxime, dolor optio. A error id quis
        dignissimos quasi, ex excepturi animi quibusdam illum ducimus tempora
        possimus sint! Possimus dolores officia laudantium quibusdam ullam totam
        exercitationem doloribus repellat dignissimos beatae soluta tenetur,
        iusto sed voluptate dicta inventore obcaecati temporibus deserunt
        consequatur a culpa rem eaque dolorum praesentium? Ratione, aliquam
        earum, explicabo repellat, commodi voluptas eligendi eius ab qui
        deserunt provident rem incidunt natus sapiente optio expedita. Ducimus
        dignissimos excepturi veniam quos sint consequuntur.
      </p>
    </div>
  );
};

export default CityDetails;
