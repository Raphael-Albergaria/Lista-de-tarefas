import React, { Component } from 'react';
import Task from './Task';

export const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map(task => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    );
};
