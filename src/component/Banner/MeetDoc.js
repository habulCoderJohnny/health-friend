import React from 'react';
import docImg from '../../assets/vectors/Frame 6.svg';
import plus from '../../assets/vectors/plus.svg';

const MeetDoc = () => {
    return (
        <div>
            <div className='w-50 h-20 bg-base-100 rounded-md mt-[-90px] ml-60'>
                <h1 className='font-bold'>Meet Our Doctors</h1>
                   <div className='flex'>
                   <img src={docImg} alt="" />
                    {/* <img src={plus} alt="" />   */}
                    <div className="avatar placeholder">
                        <div className="w-10 bg-primary-focus text-4xl rounded-full">
                            <span className='text-white text-2xl'>+</span>
                        </div>
                    </div>

                   </div>
                
            </div>
        </div>
    );
};

export default MeetDoc;