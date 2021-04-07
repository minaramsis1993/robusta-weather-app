import {
  celsiusToFahrenheit,
  convertDegType,
  fahrenheitToCelsius,
  getDaysArr,
  getHoursArr
} from '../util/helpers';
import { TemperatureTypes } from '../util/constants';
export const adaptDataToUI = (data) => {
  const cloned = { ...data };
  const hourlyData = cloned['hourly']['data'];
  const dailyData = cloned['daily']['data'];
  const currentDayData = dailyData[0];
  return {
    currentCityData: {
      icon: cloned?.currently?.icon,
      shortSummary: cloned?.currently?.summary,
      apparentTemperature: cloned?.currently?.apparentTemperature,
      apparentTemperatureHigh: currentDayData?.apparentTemperatureHigh,
      apparentTemperatureLow: currentDayData?.apparentTemperatureLow,
      summary: currentDayData?.summary
    },
    adaptedDaily: dailyData?.map((item, index) => ({
      icon: item.icon,
      weekDay: getDaysArr()[index],
      // I calc avg as there is no exact value for temp
      apparentTemperature: (
        (item.apparentTemperatureHigh + item.apparentTemperatureLow) /
        2
      ).toFixed(2)
    })),
    adaptedHourly: hourlyData
      ?.map((item) => {
        return {
          apparentTemperature: item.apparentTemperature,
          icon: item.icon
        };
      })
      .slice(0, 24)
      .map((item, index) => ({
        ...item,
        hour: getHoursArr()[index]
      })),
    ...cloned
  };
};
export const convertData = (data, degreeType) => {
  const cloned = { ...data };
  const { adaptedDaily, adaptedHourly, currentCityData } = cloned;
  console.log('data', data);
  console.log('degreeType', degreeType);
  const res = {
    adaptedDaily: adaptedDaily.map((item) => ({
      ...item,
      apparentTemperature: convertDegType(degreeType, +item.apparentTemperature)
    })),
    // adaptedHourly: adaptedHourly.map((item) => ({
    //   ...item,
    //   apparentTemperature: convertDegType(degreeType, +item.apparentTemperature)
    // })),
    // currentCityData: {
    //   ...currentCityData,
    //   apparentTemperature: convertDegType(
    //     degreeType,
    //     +currentCityData.apparentTemperature
    //   ),
    //   apparentTemperatureHigh: convertDegType(
    //     degreeType,
    //     +currentCityData.apparentTemperatureHigh
    //   ),
    //   apparentTemperatureLow: convertDegType(
    //     degreeType,
    //     +currentCityData.apparentTemperatureLow
    //   )
    // },
    ...cloned
  };
  return res;
};
