import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle} from '@fortawesome/free-solid-svg-icons';


const TaskList = ({ tasks, updateTask, type }) => {

    const filteredTasks = (type === 'active') ? tasks.filter(task => !task.complete) : tasks.filter(task => task.complete);

    return (
        <>
            <div>{(type === 'active') ? 'To Do List' : 'Completed'}</div>
            <ul className="task-list">
                {filteredTasks.map((task, index) => {
                    return <li key={index} className={(task.complete) ? 'complete' : ''}>
                        <input id={`checkbox-${index}`} checked={task.complete} onChange={() => updateTask(task)} type="checkbox"></input>
                        {/* <label for={`checkbox-${index}`}><FontAwesomeIcon icon={faCircle} /></label> */}
                        {task.title}
                    </li>
                })}
            </ul>
        </>
    )
}

export default TaskList;