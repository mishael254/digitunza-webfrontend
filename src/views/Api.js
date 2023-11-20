import axios from "axios";
import{ useEffect, useState } from "react";



function Api(){
    const [members, setMembers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

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
    return {members,feedbacks}
}
export default Api;