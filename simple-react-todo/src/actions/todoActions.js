import {
  GET_TODO,
  GET_TODOS,
  CLEAR_TODO,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from './types';
import axios from 'axios';
import { apiUrl } from '../config/constants';

/**
 * Get Todos
 */
export const getTodos = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${apiUrl}/todos.php`);
      dispatch({
        type: GET_TODOS,
        payload: result.data
      });
    } catch (e) {
      dispatch({
        type: GET_TODOS,
        payload: []
      });
    }
  }
}

/**
 * Get Single Todo
 */
export const getTodo = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${apiUrl}/todos.php?query_type=single&id=${id}`);
      dispatch({
        type: GET_TODO,
        payload: result.data
      });
    } catch (e) {
      dispatch({
        type: GET_TODO,
        payload: []
      });
    }
  }
}

/**
 * Create Todo
 */
export const createTodo = (todo) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(`${apiUrl}/todos.php`, {...todo});
      dispatch({
        type: CREATE_TODO,
        payload: result.data
      });
    } catch (e) {
      dispatch({
        type: CREATE_TODO,
        payload: []
      });
    }
  }
}

/**
 * Update Todo
 */
export const updateTodo = (todo) => {
  return async (dispatch) => {
    try {
      await axios.patch(`${apiUrl}/todos.php?id=${todo.id}`, { name: todo.name });
      const res = await axios.get(`${apiUrl}/todos.php?query_type=single&id=${todo.id}`);
      dispatch({
        type: UPDATE_TODO,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: UPDATE_TODO,
        payload: []
      });
    }
  }
}

/**
 * Clear New Todo
 */
export const clearTodo = () => {
  return {
    type: CLEAR_TODO,
    payload: null
  };
}

/**
 * Delete Todo
 */
export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(`${apiUrl}/todos.php?id=${id}`);
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: DELETE_TODO,
        payload: []
      });
    }
  }
}