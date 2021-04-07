export const API_KEY = 'a177f8481c31fa96c3f95ad4f4f84610';
export const CURRENT_CITY_COORDS = {
  lat: 30.0074,
  lng: 31.4913
};
export const API_ENDPOINT = `https://api.darksky.net/forecast/${API_KEY}/${CURRENT_CITY_COORDS.lat},${CURRENT_CITY_COORDS.lng}`;

export const TemperatureTypes = {
  CELSIUS: 'C',
  FAHRENHEIT: 'F'
};
