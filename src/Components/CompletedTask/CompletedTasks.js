import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const CompletedTasks = () => {

    const { data: tasks, isLoading } = useQuery("CompletedTasks", () => fetch("http://localhost:5000/completed-tasks?task=completed").then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='mt-20 lg:mt-28 lg:px-32 px-3'>
            <div>
                <h1 className='lg:text-5xl text-4xl ' style={{ fontFamily: 'Russo One' }}>Completed Tasks</h1>
                <span className='flex'>
                    <div className='w-14 border-t-8 border-gray-700'></div>
                    <div className='lg:w-96 w-64 mt-1 border-t-2 border-gray-700'></div>
                </span>
            </div>

            <div class="grid lg:grid-cols-3 gap-9 mt-10">
                {
                    tasks?.map(task =>
                        <div className='min-h-[400px] p-4 rounded-lg shadow-2xl bg-white' key={task._id}>
                            <h1>Title: <span className='text-2xl font-bold'>{task.title}</span></h1>
                            <h2 className='my-2'>Date: {task.date}</h2>
                            <p>{task.details}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CompletedTasks;