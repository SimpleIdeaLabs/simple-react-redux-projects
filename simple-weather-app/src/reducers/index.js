import { combineReducers } from 'redux';
import weatherReducer from './weather.reducer';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
