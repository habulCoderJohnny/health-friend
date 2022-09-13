import React from 'react';

const Features = () => {
  return (
    <div>
      <div className="flex gap-4">

        <div className=" place-items-start">
          <div className="stat-value text-secondary">262k+</div>
          <div className="stat-title text-accent">
            Recovered Patients</div>
        </div>

        <div className="place-items-start">
          <div className="stat-value text-secondary">96%</div>
          <div className="stat-title text-accent">Satisfaction Rate</div>
        </div>


        <div className=" place-items-start">
          <div className="stat-value text-secondary">86+</div>
          <div className="stat-title text-accent">Expert Doctors</div>
        </div>


      </div>
    </div>
  );
};

export default Features;