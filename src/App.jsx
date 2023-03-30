import React, { Component, useState } from 'react';

import { Outlet } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';

const App = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
        </div>
    );

    // const [tasks, setTasks] = useState([
    //     {
    //         id: '1',
    //         title: 'Estudar Programação',
    //         complite: false
    //     },
    //     {
    //         id: '2',
    //         title: 'Ler Livros',
    //         complite: true
    //     }
    // ]);
    // const handleTaskClick = taskId => {
    //     const newTasks = tasks.map(task => {
    //         if (task.id === taskId) return { ...task, complite: !task.complite };
    //         return task;
    //     });
    //     setTasks(newTasks);
    // };
    // const handleTaskAddition = taskTitle => {
    //     const newTasks = [
    //         ...tasks,
    //         {
    //             title: taskTitle,
    //             id: uuidv4(),
    //             complite: false
    //         }
    //     ];
    //     setTasks(newTasks);
    // };
    // const handleTaskDeletion = taskId => {
    //     const newTasks = tasks.filter(task => task.id !== taskId);
    //     setTasks(newTasks);
    // };
    // return (
    //     <div className="container">
    //         <Header />
    //         <AddTask handleTaskAddition={handleTaskAddition} />
    //         <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
    //     </div>
    // );
};
export default App;
