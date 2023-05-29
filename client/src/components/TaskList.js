import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as CircleOutline } from '@fortawesome/free-regular-svg-icons';
import { faCircle as CircleFilled } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";



const TaskList = ({ tasks, updateTask, type }) => {

    const [expanded, setExpanded] = useState(true);

    const filteredTasks = (type === 'active') ? tasks.filter(task => !task.complete) : tasks.filter(task => task.complete);

    const handleClick = (e) => {
        setExpanded(!expanded);
    };

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
                {(filteredTasks.length > 1) ?
                    <ul className="task-list">
                            {filteredTasks.map((task, index) => {
                                return <li key={index} className={(task.complete) ? 'complete' : ''}>
                                    <input id={`checkbox-${type}-${index}`} checked={task.complete} onChange={(e) => updateTask(e, task)} type="checkbox"></input>
                                    <label for={`checkbox-${type}-${index}`}>
                                        <FontAwesomeIcon icon={(type === 'active') ? CircleOutline : CircleFilled} />
                                    </label>
                                    {task.title}
                                </li>
                            })}
                    </ul>
                : <div className="empty-list-text">Nothing to show</div>}
            </div>
        </>
    )
}

export default TaskList;