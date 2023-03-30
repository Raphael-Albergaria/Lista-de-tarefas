import React, { Component, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import '../App.css';
import { Tasks } from '../components/Tasks';
import AddTask from '../components/AddTask';
import { Header } from '../components/Header';

const Home = () => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Estudar Programação',
            complite: false
        },
        {
            id: '2',
            title: 'Ler Livros',
            complite: true
        },
        {
            id: '3',
            title: 'test',
            complite: true
        }
    ]);

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleTaskClick = taskId => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) return { ...task, complite: !task.complite };
            return task;
        });
        setTasks(newTasks);
    };

    const handleTaskAddition = taskTitle => {
        const newTasks = [
            ...tasks,
            {
                title: taskTitle,
                id: uuidv4(),
                complite: false
            }
        ];
        setTasks(newTasks);
    };

    const handleTaskDeletion = taskId => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    };

    return (
        <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
        </>
    );
};

export default Home;
