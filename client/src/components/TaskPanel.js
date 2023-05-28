import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

const TaskPanel = () => {
    
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

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
        const data = {title: taskInput, complete: false};
        fetch('/api/tasks/addtask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(tasks => setTasks(tasks))
        .catch(err => console.log(err))
    }

    const updateTask = (task) => {
        const data = {
            ...task,
            complete: !task.complete
        };
        fetch(`/api/tasks/updatetask/${task._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(tasks => setTasks(tasks))
        .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
        setTaskInput(""); // Clear the input field after submitting
      }
    
    const handleChange = (e) => {
        setTaskInput(e.target.value);
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <>
            <h1>To do:</h1>
            <TaskList tasks={tasks} updateTask={updateTask} />
            <form id="addTask" method="POST" onSubmit={handleSubmit}>
                <input type='text' id='taskInput' value={taskInput} onChange={handleChange}></input>
            </form>
        </>
    )
}

export default TaskPanel;