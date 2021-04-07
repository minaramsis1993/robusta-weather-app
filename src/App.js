import { useEffect, useState } from 'react';
import { adaptDataToUI } from './adapters/data';
import './App.css';
import CityDetails from './components/CurrentCityDetails';
import CurrentCity from './components/CurrentCitySection';
import Header from './components/Header';
import Data from './mock/data.json';

// import { API_ENDPOINT } from './util/constants';
import { TemperatureTypes } from './util/constants';
function App() {
  const [temperatureInfo, setTemperatureInfo] = useState([]);
  const [temperatureType, setTemperatureType] = useState(
    TemperatureTypes.CELSIUS
  );

  useEffect(() => {
    console.log('Data', Data);
    // THERE IS AN ERROR WITH THE API
    // Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    // So I've mocked the data in a json file
    // async function getCityWeather() {
    //   try {
    //     const response = await fetch(API_ENDPOINT);
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // getCityWeather();
    setTemperatureInfo(adaptDataToUI(Data));
  }, []);

  useEffect(() => {
    console.log('temperatureInfo', temperatureInfo);
  }, [temperatureInfo]);

  const changeTemperatureType = (type) => {
    setTemperatureType(type);
  };

  return (
    <div className="App">
      <div className="Container">
        <Header
          temperatureType={temperatureType}
          changeTemperatureType={changeTemperatureType}
        />
        <CurrentCity currentCityData={temperatureInfo?.currentCityData} />
        <CityDetails temperatureInfo={temperatureInfo} />
      </div>
    </div>
  );
}

export default App;
