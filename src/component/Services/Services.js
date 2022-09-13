import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className='my-6'>
            <h1 className='text-secondary text-xl text-center'>Our Services</h1>
            <h1 className='text-center text-2xl font-bold'>Services For Your Health</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4'>
            {
                service.map(treatment=> <Service key={treatment._id} treatment={treatment}></Service>)
            }

        </div>
        </div>
    );
};

export default Services;