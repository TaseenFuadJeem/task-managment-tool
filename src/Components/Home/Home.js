import React from 'react';

const Home = () => {
    return (
        <section className='mt-20 lg:mt-28 lg:px-32 px-3'>
            <h1 className='lg:text-5xl text-4xl ' style={{ fontFamily: 'Russo One' }}> Your Daily Tasks</h1>
            <span className='flex'>
                <div className='w-14 border-t-8 border-gray-700'></div>
                <div className='lg:w-96 w-64 mt-1 border-t-2 border-gray-700'></div>
            </span>

            <div class="overflow-x-auto mt-10">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Task Details</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section >
    );
};

export default Home;