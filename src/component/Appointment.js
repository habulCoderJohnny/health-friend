import React, { useEffect, useState } from 'react';
import pose3 from "../../src/assets/pose_3.png";
import Service from './Services/Service';
const Appointment = () => {
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [])
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={pose3} className="max-w-lg rounded-lg mx-20" />
    <div>
      <h1 className="text-secondary">Our Hospital Feature</h1>
      <p className="py-6 text-5xl font-bold">Make An Appointment Easy And Fast Services </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4'>
            {
                appointment.map(treatment=> <Service key={treatment._id} treatment={treatment}></Service>)
            }

        </div>
    </div>
  </div>
</div>
    );
};

export default Appointment;