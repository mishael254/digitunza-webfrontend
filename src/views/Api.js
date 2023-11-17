import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://tathmini.live:8000/api/member/')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error=> console.log('Error fetching users:',error));
    },[]);

    return(
        <>
        </>

    );


}
export default Api;