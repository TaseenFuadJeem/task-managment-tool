import React from 'react';
import { MdPostAdd } from 'react-icons/md';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '4px solid #BA881C',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px"
};

const Todo = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <label onClick={handleClose} class="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
                </Box>
            </Modal>

        </section>
    );
};

export default Todo;