import React from 'react';
import {useNavigate} from 'react-router-dom';

export function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
        <div 
        className="bg-amber-500 p-4 hover:bg-amber-600
        hover:cursor-pointer 
        rounded-lg
        drop-shadow-lg"
        
        onClick = {() => {navigate(`/tasks/${task.id}`)}}
        >
            <h1
            className='text-neutral-950
            hover:text-xl font-bold
            hover:uppercase'
            >{task.tittle}</h1>
            <p
            className=' hover:text-amber-300'
            >{task.description}</p>
        </div>
    );
}