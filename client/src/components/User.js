import React, { useEffect, useState } from "react";

const User = () => {
    
    const [users, setUsers] = useState([]);

    // proxies to express server and returns the reponse of the route `/api/users`,
    // which we can see in routers/users.js returns the documents in the Students model
    const loadData = () => {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users);
            }).catch(err => console.log(err))
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </div>
    )
}

export default User;