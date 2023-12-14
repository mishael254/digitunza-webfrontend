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
  reducers: {
    fetchMembersSuccess: (state, action) => {
      state.members = action.payload;
    },
    fetchFeedbacksSuccess: (state, action) => {
      state.feedbacks = action.payload;
    },
    fetchDeploymentsSuccess: (state, action) => {
      state.deployments = action.payload;
    },
    fetchStatLogsSuccess: (state, action) => {
      state.statLogs = action.payload;
    },
    fetchMessagesSuccess: (state, action) => {
      state.messages = action.payload;
    },
    fetchPlaylistsSuccess: (state, action) => {
      state.playlists = action.payload;
    },
    fetchProjectsSuccess: (state, action) => {
      state.projects = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMembersAction.fulfilled, (state, action) => {
      state.members = action.payload;
    });
    builder.addCase(fetchDeploymentsAction.fulfilled, (state, action) => {
      state.deployments = action.payload;
    });
    builder.addCase(fetchFeedbacksAction.fulfilled, (state, action) => {
      state.feedbacks = action.payload;
    });
    builder.addCase(fetchMessagesAction.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(fetchStatLogsAction.fulfilled, (state, action) => {
      state.statLogs = action.payload;
    });
    builder.addCase(fetchProjectsAction.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
    builder.addCase(fetchPlaylistsAction.fulfilled, (state, action) => {
      state.playlists = action.payload;
    });
  },
  
});

export const {
  fetchMembersSuccess,
  fetchFeedbacksSuccess,
  fetchDeploymentsSuccess,
  fetchStatLogsSuccess,
  fetchMessagesSuccess,
  fetchPlaylistsSuccess,
  fetchProjectsSuccess,
  setLoading,
} = appSlice.actions;

//selectors

export const selectMembers = (state) => state.app.members;
export const selectFeedbacks = (state) => state.app.feedbacks;
export const selectDeployments = (state) => state.app.deployments;
export const selectStatLogs = (state) => state.app.statLogs;
export const selectMessages = (state) => state.app.messages;
export const selectPlaylists = (state) => state.app.playlists;
export const selectProjects = (state) => state.app.projects;
export const selectIsLoading = (state) => state.app.isLoading;
export default appSlice.reducer;
