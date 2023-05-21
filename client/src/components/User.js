import React, { useEffect, useState } from "react";

const User = () => {
    
    const [users, setUsers] = useState([]);

    // proxies to express server and returns the repsonse of the route `/api/users`
    const loadData = () => {
        fetch('api/users')
            .then(res => res.json())
            .then(users => {
                setUsers(users);
            })
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            {users.map(user => {
                return <li key={user.user}>Name: {user.user}, Age: {user.age}</li>
            })}
        </div>
    )
}

export default User;