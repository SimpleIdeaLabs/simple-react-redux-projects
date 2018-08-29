import { combineReducers } from 'redux';
import postsReducer from './posts.reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: postsReducer,
  form: formReducer
});

export default rootReducer;
