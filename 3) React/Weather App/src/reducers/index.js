import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const weatherData = handleActions({
  [actions.getWeatherSuccess](state, { payload: { weather } }) {
    return weather;
  },
}, {
  list: [],
  city: {
    name: '',
  },
});

const weatherUI = handleActions({
  [actions.getWeatherRequest](state) {
    return {
      ...state,
      requestingState: 'request',
    };
  },
  [actions.getWeatherFailure](state) {
    return {
      ...state,
      requestingState: 'failure',
    };
  },
  [actions.getWeatherSuccess](state) {
    return {
      ...state,
      requestingState: 'success',
    };
  },
}, {});

export default combineReducers({
  weatherData, weatherUI, form: formReducer,
});
