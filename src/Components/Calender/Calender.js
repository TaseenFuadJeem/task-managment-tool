import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {

    const [value, onChange] = useState(new Date());

    return (
        <section className='mt-20 lg:mt-28 lg:px-32 px-3'>

            <Calendar className='mx-auto p-5 rounded-lg' onChange={onChange} value={value} />

        </section>
    );
};

export default Calender;