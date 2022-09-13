import React from 'react';
import pose from '../../assets/pose_1.png';
import checkupIcon from '../../assets/checkupFrame.png';
import Features from './Features';
import MeetDoc from './MeetDoc';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={pose} className="max-w-sm rounded-lg bg-ellipse bg-cover mx-20" />


                        <img className='mt-[-120px] ml-[25px]' src={checkupIcon} />
                        <MeetDoc></MeetDoc>
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold">Your <span className='text-primary'>Health</span> Is Our <br /> Top <span className='text-secondary'>Priority</span></h1>
                        <p className="py-6 text-accent">There are many variations of passages of lpsum <br /> available, but the majority hae suffered.</p>
                        <button className="btn btn-primary mb-4">Meet Our Specialist</button>

                        <Features></Features>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;