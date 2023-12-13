// actions.js
import axios from 'axios';
import * as types from './Types';

export const fetchMembersAction = () => async (dispatch) => {
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

export const fetchFeedbacksAction = () => async (dispatch) => {
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

export const fetchDeploymentsAction = () => async (dispatch) => {
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

export const fetchStatLogsAction = () => async (dispatch) => {
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

export const fetchMessagesAction = () => async (dispatch) => {
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

export const fetchPlaylistsAction = () => async (dispatch) => {
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

export const fetchProjectsAction = () => async (dispatch) => {
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
