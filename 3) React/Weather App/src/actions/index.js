import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const getWeatherRequest = createAction('GET_WEATHER_REQUEST');
export const getWeatherSuccess = createAction('GET_WEATHER_SUCCESS');
export const getWeatherFailure = createAction('GET_WEATHER_FAILURE');

export const getWeather = (city) => async (dispatch) => {
  dispatch(getWeatherRequest());
  try {
    const response = await axios.get(routes.weather(), {
      params: {
        q: city,
        appid: 'ce488d53cd521bde797eb76b70e9fa0c',
        units: 'metric',
      },
    });
    dispatch(getWeatherSuccess({ weather: response.data }));
  } catch (e) {
    dispatch(getWeatherFailure());
  }
};
