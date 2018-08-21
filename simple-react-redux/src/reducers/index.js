import { combineReducers } from 'redux';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  movies: movies
});

export default rootReducer;