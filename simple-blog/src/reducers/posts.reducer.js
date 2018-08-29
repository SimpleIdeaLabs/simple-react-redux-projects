import { types } from '../actions/posts.action';

const initialState = {
  list: [],
  post: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_POSTS:
    
      return {
        ...state,
        list: action.payload
      }

    case types.GET_POST:
      return {
        ...state,
        post: action.payload
      }

    default: 
      return state;
  }
}
