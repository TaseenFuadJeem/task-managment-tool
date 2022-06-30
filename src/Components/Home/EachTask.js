import React from 'react';

const EachTask = ({ task, index }) => {
    return (
        <div className='min-h-[400px] p-4 rounded-lg shadow-2xl bg-white'>
            <div className='flex justify-between mb-4'>
                <input type="checkbox" class="checkbox checkbox-lg" />
                <p className='text-lg font-semibold'>Note: {index + 1}</p>
            </div>
            <h1>Title: <span className='text-2xl font-bold'>{task.title}</span></h1>
            <h2 className='my-2'>Date: {task.date}</h2>
            <p>{task.details}</p>
        </div>
    );
};

export default EachTask;