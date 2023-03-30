import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import './TaskDetails.css';

const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/');
    };
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h3>{id}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste enim sint assumenda autem ad.</p>
            </div>
        </>
    );
};

export default TaskDetails;
