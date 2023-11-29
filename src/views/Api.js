import { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [members, setMembers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [deployments, setDeployments] = useState([]);
  const [statLogs, setStatLogs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    fetchDeployments();
  }, []);

  useEffect(() => {
    fetchStatLogs();
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getMembers"); // Update with your backend route
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getFeedbacks"); // Update with your backend route
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  const fetchDeployments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getDeployments"); // Update with your backend route
      setDeployments(response.data);
    } catch (error) {
      console.error("Error fetching deployments:", error);
    }
  };

  const fetchStatLogs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getStatLog"); // Update with your backend route
      setStatLogs(response.data);
    } catch (error) {
      console.error("Error fetching stat logs:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getMessages"); // Update with your backend route
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/getPlaylist"); // Update with your backend route
      setPlaylists(response.data);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  return { members, feedbacks, deployments, messages, statLogs, playlists };
}

export default Api;
