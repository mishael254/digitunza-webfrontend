import axios from "axios";
import{ useEffect, useState } from "react";



function Api(){
    const [members, setMembers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [deployments, setDeployments] = useState([]);
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



    return {members,feedbacks, deployments}
}
export default Api;