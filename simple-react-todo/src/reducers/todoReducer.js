import {
  GET_TODO,
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  CLEAR_TODO,
  DELETE_TODO
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        list: action.payload
      };

    case CREATE_TODO:
      return {
        ...state,
        newTodo: action.payload
      }

    case CLEAR_TODO:
      return {
        ...state,
        newTodo: false,
        updatedTodo: false
      }

    case GET_TODO:
      return {
        ...state,
        todo: action.payload
      }

    case UPDATE_TODO:
      return {
        ...state,
        updatedTodo: action.payload
      }

    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload)
      }

    default:
      return state;
  }
}