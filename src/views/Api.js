import axios from "axios";
import{ useEffect, useState } from "react";



function Api(){
    const [members, setMembers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [deployments, setDeployments] = useState([]);
    const [statLogs, setStatLogs] = useState([]);
    const [messages, setMessages] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
      axios.get('http://tathmini.live:8000/api/member/')
        .then(response => setMembers(response.data))
        .catch(error=> console.error('Error fetching members:',error));
    },[]);
    useEffect(()=>{
       
      axios.get('http://tathmini.live:8000/api/feedback/create/')
        .then(response => 
           
            setFeedbacks(response.data))
            
        .catch(error=> console.error('Error fetching feedback:',error));
    },[]);
    useEffect(() =>{
        axios.get('http://tathmini.live:8000/api/deployment/')
        .then(response => setDeployments(response.data))
        .catch(error=> console.error('Error fetching deployments:',error));
    },[]);

    useEffect(()=>{
      axios.get('http://tathmini.live:8000/api/statlog/')
      .then(response => setStatLogs(response.data))
      .catch(error =>console.error('Error fetching Statlogs:',error));
    },[]);
    useEffect(()=>{
      axios.get('http://tathmini.live:8000/api/message/')
      .then(response =>setMessages(response.data))
      .catch(error => console.error('Error fetching messages:',error));
    },[]);
    useEffect(() =>{
      axios.get('http://tathmini.live:8000/api/playlist/')
      .then(response => setPlaylists(response.data))
      .catch(error => console.error('Error fetching playlists:',error));
    },[]);



    return {members,feedbacks, deployments, messages, statLogs, playlists}
}
export default Api;