import { CgClose, CgInfo } from 'react-icons/cg';
import { useNavigate } from 'react-router';

import React from 'react';
import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const navigate = useNavigate();

    const handleTaskDetailsClick = () => {
        navigate(`/${task.title}`);
    };

    return (
        <div className="task-container" style={task.complite ? { borderLeft: '0.375rem solid #7fff00' } : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    );
};

export default Task;
