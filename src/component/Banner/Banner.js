import React from 'react';
import pose from '../../assets/pose_2.png';

import checkupIcon from '../../assets/vectors/checkup.svg';
import Features from './Features';
import MeetDoc from './MeetDoc';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse"> 
              
                   <div>
                   <img src={pose} className="max-w-sm rounded-lg bg-ellipse bg-cover"/> 
                   <MeetDoc></MeetDoc>
                   </div>
            
                    {/* <div className='w-50 h-10 bg-secondary rounded-lg my-40'>
                            <h1 className='text-white flex'>
                            <img src={checkupIcon}/>
                            Regular checkup</h1></div>  */}
                 
                    <div>
                        <h1 className="text-5xl font-bold">Your <span className='text-primary'>Health</span> Is Our <br /> Top <span className='text-secondary'>Priority</span></h1>
                        <p className="py-6 text-accent">There are many variations of passages of lpsum <br /> available, but the majority hae suffered.</p>
                        <button className="btn btn-primary">Meet Our Specialist</button>
              
                        <Features></Features>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Banner;