import React from 'react';
import { toast } from 'react-toastify';

const EachTask = ({ task, index }) => {

    const completeTask = () => {

        const url = `http://localhost:5000/task-complete/${task._id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ task: "completed" })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success("Task updated successfully 😄");
            });

    }

    return (
        <div className='min-h-[400px] p-4 rounded-lg shadow-2xl bg-white'>
            <div className='flex justify-between mb-4'>
                <input onClick={() => completeTask()} type="checkbox" className="checkbox checkbox-lg" />
                <p className='text-lg font-semibold'>Note: {index + 1}</p>
            </div>
            <h1>Title: <span className='text-2xl font-bold'>{task.title}</span></h1>
            <h2 className='my-2'>Date: {task.date}</h2>
            <p>{task.details}</p>
        </div>
    );
};

export default EachTask;