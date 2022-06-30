import React, { useState } from 'react';
import { MdPostAdd } from 'react-icons/md';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import TodoTableRow from './TodoTableRow';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '4px solid #BA881C',
    boxShadow: 24,
    p: 3,
    borderRadius: "10px"
};

const Todo = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [date, setDate] = useState(new Date())

    const { data: tasks, isLoading, refetch } = useQuery("tasksForTodoPage", () => fetch("http://localhost:5000/all-tasks").then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const onSubmit = (data) => {

        const url = "http://localhost:5000/add-a-new-task";
        console.log(data);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                handleClose();
                refetch();
                toast.success("Task added successfully");
            });

    };

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
                    <button onClick={handleOpen} className='btn btn-primary'>Add a task <MdPostAdd className='ml-2 text-2xl' /></button>
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-9 mt-10">
                {
                    tasks?.map((task, index) => <TodoTableRow key={task._id} task={task} index={index} refetch={refetch} />)
                }
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='lg:w-2/5 w-11/12' sx={style}>
                    <div className='flex justify-between    '>
                        <h1 className='text-xl font-bold underline underline-offset-2 mb-4'>Add a new task</h1>
                        <label onClick={handleClose} class="btn btn-primary btn-sm btn-circle">✕</label>
                    </div>

                    <div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Task Title" className="input input-bordered" {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Title is required"
                                    }
                                })} />
                                <label className="label">
                                    {errors.title?.type === 'required' && <span className="label-text-alt text-red-500">{errors.title.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Details</span>
                                </label>
                                <textarea type="text" placeholder="Write about your task" className="textarea textarea-bordered" {...register("details", {
                                    required: {
                                        value: true,
                                        message: "Task details is required"
                                    }
                                })} />
                                <label className="label">
                                    {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                                </label>
                            </div>

                            <div className='lg:flex justify-center items-center'>
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                />

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="text" value={format(date, 'PP')} className="input input-bordered" {...register("date")} />
                                </div>

                            </div>

                            <input className='btn btn-primary w-full mt-4' type="submit" />
                        </form>
                    </div>

                </Box>
            </Modal>

        </section>
    );
};

export default Todo;