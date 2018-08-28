import axios from 'axios';

const api = (city) => `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=cc2177f1ee671c5fcf03000fb439cc16`;

/**
 * Action Types
 */
export const types = {
  GET_WEATHER: 'GET_WEATHER'
}

/**
 * Get Weather
 */
export const getWeather = (city) => {
  const request = axios.get(api(city));
  return {
    type: types.GET_WEATHER,
    payload: request
  }
}