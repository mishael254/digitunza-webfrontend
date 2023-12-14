
import axios from 'axios';
import * as types from './Types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMembersSuccess, setLoading,fetchFeedbacksSuccess,fetchDeploymentsSuccess,fetchMessagesSuccess,fetchPlaylistsSuccess,fetchProjectsSuccess,fetchStatLogsSuccess } from './Reducers';


export const fetchMembersAction = createAsyncThunk('app/fetchMembers', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getMembers');
    return response.data;
  } catch (error) {
    console.error('Error fetching members:', error);
    throw error; // Propagate the error
  }
});


export const fetchFeedbacksAction = createAsyncThunk('app/fetchFeedbacks', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getFeedbacks');
    return response.data;
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    throw error; 
  }
});


export const fetchDeploymentsAction = createAsyncThunk('app/fetchDeployments', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getDeployments');
    return response.data;
  } catch (error) {
    console.error('Error fetching Deployments:', error);
    throw error; // Propagate the error
  }
});



export const fetchStatLogsAction = createAsyncThunk('app/fetchStatlogs', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getStatlog');
    return response.data;
  } catch (error) {
    console.error('Error fetching Statlogs:', error);
    throw error; // Propagate the error
  }
});



export const fetchMessagesAction = createAsyncThunk('app/fetchMessages', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getMessages');
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error; // Propagate the error
  }
});



export const fetchPlaylistsAction = createAsyncThunk('app/fetchPlaylists', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getPlaylist');
    return response.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error; // Propagate the error
  }
});


export const fetchProjectsAction = createAsyncThunk('app/fetchProjects', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/getProjects');
    return response.data;
  } catch (error) {
    console.error('Error fetching Projects:', error);
    throw error; // Propagate the error
  }
});

