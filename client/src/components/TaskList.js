import React from "react";

const TaskList = ({tasks}) => {

    return (
        <div className="task-list">
            {tasks.map((task, index) => {
                return <li key={index}>{task.title}</li>
            })}
        </div>
    )
}

export default TaskList;