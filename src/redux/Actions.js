// actions.js
import axios from 'axios';
import * as types from './Types';

export const fetchMembers = () => async (dispatch) => {
  dispatch({ type: types.SET_LOADING, payload: true });
  try {
    const response = await axios.get('http://localhost:3001/api/getMembers');
    dispatch({ type: types.FETCH_MEMBERS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching members:', error);
  } finally {
    dispatch({ type: types.SET_LOADING, payload: false });
  }
};

export const fetchFeedbacks = () => async (dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      const response = await axios.get('http://localhost:3001/api/getFeedbacks');
      dispatch({ type: types.FETCH_FEEDBACKS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
};

export const fetchDeployments = () => async (dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      const response = await axios.get('http://localhost:3001/api/getDeployments');
      dispatch({ type: types.FETCH_DEPLOYMENTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
};

export const fetchStatLogs = () => async (dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      const response = await axios.get('http://localhost:3001/api/getStatLog');
      dispatch({ type: types.FETCH_STAT_LOGS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching statlogs:', error);
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
};

export const fetchMessages = () => async (dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      const response = await axios.get('http://localhost:3001/api/getMessages');
      dispatch({ type: types.FETCH_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
};

export const fetchPlaylists = () => async (dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      const response = await axios.get('http://localhost:3001/api/getPlaylist');
      dispatch({ type: types.FETCH_PLAYLISTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching Playlists:', error);
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
};

export const fetchProjects = () => async (dispatch) => {
    dispatch({ type: types.SET_LOADING, payload: true });
    try {
      const response = await axios.get('http://localhost:3001/api/getProjects');
      dispatch({ type: types.FETCH_PROJECTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      dispatch({ type: types.SET_LOADING, payload: false });
    }
};
          
// Repeat the above structure for other fetch functions
