import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { DayPicker } from 'react-day-picker';
import { useForm } from "react-hook-form";
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { toast } from 'react-toastify';

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

const TodoTableRow = ({ task, index, refetch }) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [updatedDate, setUpdatedDate] = useState(new Date())

    const onSubmit = (data) => {

        const url = `http://localhost:5000/update-a-task/${task._id}`;
        console.log(data)

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                refetch();
                handleClose();
                toast.success("Task updated successfully 😄");
            });

    }

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{task?.title}</td>
                <td>{task?.details}</td>
                <td>{task?.date}</td>
                <th>
                    <button onClick={handleOpen} class="btn btn-ghost btn-xs">Update</button>
                </th>
            </tr>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='lg:w-2/5 w-11/12' sx={style}>
                    <div className='flex justify-between    '>
                        <h1 className='text-xl font-bold underline underline-offset-2 mb-4'>Update the task</h1>
                        <label onClick={handleClose} class="btn btn-primary btn-sm btn-circle">✕</label>
                    </div>

                    <div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update Title</span>
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
                                    <span className="label-text">Update Task Details</span>
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
                                    selected={updatedDate}
                                    onSelect={setUpdatedDate}
                                />

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Update Date</span>
                                    </label>
                                    <input type="text" value={format(updatedDate, 'PP')} className="input input-bordered" {...register("date")} />
                                </div>

                            </div>

                            <input className='btn btn-primary w-full mt-4' type="submit" value="Update task" />
                        </form>
                    </div>

                </Box>
            </Modal>
        </>
    );
};

export default TodoTableRow;