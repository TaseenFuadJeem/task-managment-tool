import React from 'react';
import TableRaw from './TableRaw';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Home = () => {

    const { data: tasks, isLoading } = useQuery("tasksForHomePage", () => fetch("http://localhost:5000/all-tasks").then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

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

                        {
                            tasks?.map(task => <TableRaw key={task._id} task={task} />)
                        }

                    </tbody>
                </table>
            </div>

        </section >
    );
};

export default Home;