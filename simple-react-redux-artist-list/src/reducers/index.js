import { combineReducers } from 'redux';
import artists from './artistsReducer';

const rootReducer = combineReducers({
  artists
});

export default rootReducer;
