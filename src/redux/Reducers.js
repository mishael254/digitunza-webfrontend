// reducers.js
import * as types from './Types';

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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MEMBERS_SUCCESS:
      return { ...state, members: action.payload };
    case types.FETCH_FEEDBACKS_SUCCESS:
      return { ...state, feedbacks: action.payload };
    case types.FETCH_DEPLOYMENTS_SUCCESS:
      return { ...state, deployments: action.payload };
    case types.FETCH_STAT_LOGS_SUCCESS:
      return { ...state, statLogs: action.payload };
    case types.FETCH_MESSAGES_SUCCESS:
      return { ...state, messages: action.payload };
    case types.FETCH_PLAYLISTS_SUCCESS:
      return { ...state, playlists: action.payload };
    case types.FETCH_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload };
    case types.SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
