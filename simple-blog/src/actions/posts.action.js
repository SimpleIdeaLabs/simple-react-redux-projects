import axios from 'axios';

// api variables
const apiUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=123';

// action types
export const types = {
  GET_POSTS: 'GET_POSTS',
  GET_POST: 'GET_POST',
  SAVE_POST: 'SAVE_POST',
  DELETE_POST: 'DELETE_POST'
}

// actions
const getPosts = () => {
  return async (dispatch) => {
    const request = await axios.get(`${apiUrl}/posts${apiKey}`);
    dispatch({
      type: types.GET_POSTS,
      payload: request.data
    });
  }
}

// Get Post
const getPost = (id) => {
  return async (dispatch) => {
    const request = await axios.get(`${apiUrl}/posts/${id}/${apiKey}`);
    dispatch({
      type: types.GET_POST,
      payload: request.data
    });
  }
}

// Save Post
const savePost = (payload) => {
  return async (dispatch) => {
    await axios.post(`${apiUrl}/posts${apiKey}`, payload);
    dispatch({
      type: types.SAVE_POST
    })
  }
}

// Delete Post
const deletePost = (id) => {
  return async (dispatch) => {
    await axios.delete(`${apiUrl}/posts/${id}${apiKey}`);
    dispatch({
      type: types.DELETE_POST
    });
  }
}

export default {
  getPosts,
  getPost,
  savePost,
  deletePost
}