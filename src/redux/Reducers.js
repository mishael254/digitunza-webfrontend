import { createSlice } from '@reduxjs/toolkit';
//import * as types from './Types';
import { fetchMembersAction,fetchDeploymentsAction,fetchFeedbacksAction,fetchMessagesAction,fetchPlaylistsAction,fetchProjectsAction,fetchStatLogsAction } from './Actions';  // Import fetchMembersAction
const initialState = {
  members: [],
  feedbacks: [],
  deployments: [],
  statLogs: [],
  messages: [],
  playlists: [],
  projects: [],
  isLoading: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(fetchMembersAction.fulfilled, (state, action) => {
      state.members = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchDeploymentsAction.fulfilled, (state, action) => {
      state.deployments = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchFeedbacksAction.fulfilled, (state, action) => {
      state.feedbacks = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchMessagesAction.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchStatLogsAction.fulfilled, (state, action) => {
      state.statLogs = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchProjectsAction.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.isLoading = false;
      return state;
    });
    builder.addCase(fetchPlaylistsAction.fulfilled, (state, action) => {
      state.playlists = action.payload;
      state.isLoading = false;
      return state;
    });
    
  },
  
});


//selectors

export const selectMembers = (state) => state.members;
export const selectFeedbacks = (state) => state.feedbacks;
export const selectDeployments = (state) => state.deployments;
export const selectStatLogs = (state) => state.statLogs;
export const selectMessages = (state) => state.messages;
export const selectPlaylists = (state) => state.playlists;
export const selectProjects = (state) => state.projects;
export const selectIsLoading = (state) => state.isLoading;
export default appSlice.reducer;
