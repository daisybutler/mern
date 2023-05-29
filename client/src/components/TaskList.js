import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as CircleOutline } from '@fortawesome/free-regular-svg-icons';
import { faCircle as CircleFilled, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";



const TaskList = ({ tasks, updateTask, type, handleDelete }) => {

    const [expanded, setExpanded] = useState(true);
    const [hover, setHover] = useState(null);

    const filteredTasks = (type === 'active') ? tasks.filter(task => !task.complete) : tasks.filter(task => task.complete);

    const handleClick = (e) => setExpanded(!expanded);
    const handleMouseOver = (id) => setHover(id);
    const handleMouseLeave = () => setHover(null);

    useEffect(() => {
        if (type === 'complete') setExpanded(false);
    }, [type]);

    return (
        <>
            <div id={`task-list-${type}`} className={`task-list-container ${(expanded) ? 'expanded' : ''}`}>
                <div onClick={handleClick}>
                    {(type === 'active') ? 'To Do List' : 'Completed'}
                    <FontAwesomeIcon icon={(expanded) ? faChevronUp : faChevronDown} />
                </div>
                {(filteredTasks.length > 0) ?
                    <ul className="task-list">
                            {filteredTasks.map((task, index) => {
                                return (
                                    <li key={index} className={(task.complete) ? 'complete' : ''} onMouseOver={() => handleMouseOver(task._id)} onMouseLeave={handleMouseLeave}>
                                        <input id={`checkbox-${type}-${index}`} checked={task.complete} onChange={(e) => updateTask(e, task)} type="checkbox"></input>
                                        <label for={`checkbox-${type}-${index}`}>
                                            <FontAwesomeIcon icon={(type === 'active') ? CircleOutline : CircleFilled} />
                                        </label>
                                        {task.title}
                                        <button className="remove-button" onClick={() => handleDelete(task._id)}>
                                            <FontAwesomeIcon icon={faXmark} className={(hover === task._id) ? 'show-controls' : ''} />
                                        </button>
                                    </li>
                                )
                            })}
                    </ul>
                : <div className="empty-list-text">Nothing to show</div>}
            </div>
        </>
    )
}

export default TaskList;