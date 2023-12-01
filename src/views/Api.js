import { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [deployments, setDeployments] = useState([]);
  const [statLogs, setStatLogs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getMembers"); // Update with your backend route
      setMembers(response.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getFeedbacks"); // backend route
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const fetchDeployments = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getDeployments"); // backend route
      setDeployments(response.data);
    } catch (error) {
      console.error("Error fetching deployments:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const fetchStatLogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getStatLog"); // Update with your backend route
      setStatLogs(response.data);
    } catch (error) {
      console.error("Error fetching stat logs:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const fetchMessages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getMessages"); // Update with your backend route
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const fetchPlaylists = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getPlaylist"); // Update with your backend route
      setPlaylists(response.data);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }finally{
      setIsLoading(false);
    }
  };

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/api/getProjects"); // Update with your backend route
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }finally{
      setIsLoading(false);
    }
  };

  return { members, feedbacks, deployments, messages, statLogs, playlists,projects, isLoading };
}

export default Api;
