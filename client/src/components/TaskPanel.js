import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

const TaskPanel = () => {
    
    const [tasks, setTasks] = useState([]);

    // proxies to express server and returns the reponse of the route `/api/tasks`,
    // which we can see in routers/users.js returns the documents in the Students model
    const loadTasks = () => {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(tasks => {
                setTasks(tasks);
            }).catch(err => console.log(err))
    };

    const addTask = () => {
        const data = {title: 'Groceries', complete: false};
        fetch('/api/addtask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <>
            <TaskList tasks={tasks} />
            <button onClick={addTask}>Add</button>
        </>
    )
}

export default TaskPanel;