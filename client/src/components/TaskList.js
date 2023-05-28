import React from "react";

const TaskList = ({ tasks, updateTask }) => {

    return (
        <div className="task-list">
            {tasks.map((task, index) => {
                return <li key={index} className={(task.complete) ? 'complete' : ''}>
                    <input checked={task.complete} onChange={() => updateTask(task)} type="checkbox"></input>
                    {task.title}
                </li>
            })}
        </div>
    )
}

export default TaskList;