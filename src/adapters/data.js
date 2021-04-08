import { convertDegType, getDaysArr, getHoursArr } from '../util/helpers';
export const adaptDataToUI = (data) => {
  const cloned = { ...data };
  const hourlyData = cloned['hourly']['data'];
  const dailyData = cloned['daily']['data'];
  const currentDayData = dailyData[0];
  // I've rounded the temps used with no decimal points for design matching only :)
  return {
    currentCityData: {
      icon: cloned?.currently?.icon,
      shortSummary: cloned?.currently?.summary,
      apparentTemperature: cloned?.currently?.apparentTemperature.toFixed(0),
      apparentTemperatureHigh: currentDayData?.apparentTemperatureHigh.toFixed(
        0
      ),
      apparentTemperatureLow: currentDayData?.apparentTemperatureLow.toFixed(0),
      summary: currentDayData?.summary
    },
    adaptedDaily: dailyData?.map((item, index) => ({
      icon: item.icon,
      weekDay: getDaysArr()[index],
      // I calc avg as there is no exact value for temp
      apparentTemperature: (
        (item.apparentTemperatureHigh + item.apparentTemperatureLow) /
        2
      ).toFixed(0)
    })),
    adaptedHourly: hourlyData
      ?.map((item) => {
        return {
          apparentTemperature: +item.apparentTemperature.toFixed(0),
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
  const res = {
    ...cloned,
    adaptedDaily: adaptedDaily.map((item) => ({
      ...item,
      apparentTemperature: convertDegType(degreeType, +item.apparentTemperature)
    })),
    adaptedHourly: adaptedHourly.map((item) => ({
      ...item,
      apparentTemperature: convertDegType(degreeType, +item.apparentTemperature)
    })),
    currentCityData: {
      ...currentCityData,
      apparentTemperature: convertDegType(
        degreeType,
        +currentCityData.apparentTemperature
      ),
      apparentTemperatureHigh: convertDegType(
        degreeType,
        +currentCityData.apparentTemperatureHigh
      ),
      apparentTemperatureLow: convertDegType(
        degreeType,
        +currentCityData.apparentTemperatureLow
      )
    }
  };
  return res;
};
