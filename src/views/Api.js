import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMembersAction,
  fetchFeedbacksAction,
  fetchDeploymentsAction,
  fetchStatLogsAction,
  fetchMessagesAction,
  fetchPlaylistsAction,
  fetchProjectsAction,
} from "../redux/Actions";
import {
  selectMembers,
  selectFeedbacks,
  selectDeployments,
  selectStatLogs,
  selectMessages,
  selectPlaylists,
  selectProjects,
  selectIsLoading,
} from "../redux/Reducers";

function Api() {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);
  const feedbacks = useSelector(selectFeedbacks);
  const deployments = useSelector(selectDeployments);
  const statLogs = useSelector(selectStatLogs);
  const messages = useSelector(selectMessages);
  const playlists = useSelector(selectPlaylists);
  const projects = useSelector(selectProjects);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchMembersAction());
    dispatch(fetchFeedbacksAction());
    dispatch(fetchDeploymentsAction());
    dispatch(fetchStatLogsAction());
    dispatch(fetchMessagesAction());
    dispatch(fetchPlaylistsAction());
    dispatch(fetchProjectsAction());
  }, [dispatch]);

  return { members, feedbacks, deployments, messages, statLogs, playlists, projects, isLoading };
}

export default Api;
