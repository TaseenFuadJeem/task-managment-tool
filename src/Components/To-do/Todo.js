import React from 'react';
import { MdPostAdd } from 'react-icons/md';

const Todo = () => {
    return (
        <section className='mt-20 lg:mt-28 lg:px-32 px-3'>
            <div className='lg:flex lg:justify-between lg:items-center'>
                <div>
                    <h1 className='lg:text-5xl text-4xl ' style={{ fontFamily: 'Russo One' }}>Your To-Do List</h1>
                    <span className='flex'>
                        <div className='w-14 border-t-8 border-gray-700'></div>
                        <div className='lg:w-96 w-64 mt-1 border-t-2 border-gray-700'></div>
                    </span>
                </div>
                <div className='flex justify-center mt-7 lg:mt-0'>
                    <button className='btn btn-primary'>Add a task <MdPostAdd className='ml-2 text-2xl' /></button>
                </div>
            </div>
        </section>
    );
};

export default Todo;