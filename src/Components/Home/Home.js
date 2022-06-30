import React from 'react';

const Home = () => {
    return (
        <section className='mt-20 lg:mt-28 lg:px-32 px-3'>
            <h1 className='lg:text-5xl text-4xl ' style={{ fontFamily: 'Russo One' }}> Your Daily Tasks</h1>
            <span className='flex'>
                <div className='w-14 border-t-8 border-gray-700'></div>
                <div className='lg:w-96 w-64 mt-1 border-t-2 border-gray-700'></div>
            </span>
        </section >
    );
};

export default Home;