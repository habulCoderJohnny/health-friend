import React from 'react';

const Service = ({treatment}) => {
    const { name, img, des } = treatment;
    return (
        <div>
            <div className="card w-[300px] bg-base-100 shadow-xl my-6">
                
                <div className="card-body">
                <div className='flex'> <h2 className="">{name}</h2><img src={img} className="ml-16"/>
                </div>
          
                    <p>{des}</p>
                    <div className="card-actions justify-start">
                        <button className="font-bold">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;