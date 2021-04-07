import { getHourFromMS } from '../util/helpers';

export const adaptDataToUI = (data) => {
  const cloned = { ...data };
  const currentDayData = cloned['daily']['data'][0];
  return {
    currentCityData: {
      icon: cloned?.currently?.icon,
      shortSummary: cloned?.currently?.summary,
      apparentTemperature: cloned?.currently?.apparentTemperature,
      apparentTemperatureHigh: currentDayData?.apparentTemperatureHigh,
      apparentTemperatureLow: currentDayData?.apparentTemperatureLow,
      summary: currentDayData?.summary
    },
    // TODO => Weekdays ARRAY
    adaptedDaily: cloned?.data.map((item) => ({
      icon: item.icon,
      // I calc avg as there is no exact value for temp
      apparentTemperature:
        (item.apparentTemperatureHigh + item.apparentTemperatureLow) / 2
    })),
    adaptedHourly: cloned?.hourly?.data.map((item) => {
      return {
        apparentTemperature: item.apparentTemperature,
        icon: item.icon,
        hour: getHourFromMS(item.time)
      };
    }),
    ...cloned
  };
};
