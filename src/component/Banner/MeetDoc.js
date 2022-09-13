import React from 'react';
import docImg from '../../assets/vectors/Frame 6.svg';
import rec from '../../assets/vectors/Rectangle 4.png';
import rec2 from '../../assets/vectors/Rectangle 5.png';


const MeetDoc = () => {
    return (
        <div>
            <div style={{backgroundColor:"white", }}  className='w-60 h-30 rounded-md text-center ml-80'>
                <h1 className='font-bold'>Meet Our Doctors</h1>
                   <div className='flex justify-center'>
                   <img src={docImg} alt="" />
                    <div className="avatar placeholder">
                        <div className="w-10 bg-primary-focus text-4xl rounded-full">
                            <button className='text-white text-2xl'>+</button>
                        </div>
                    </div>
                   </div>
                   <img src={rec} alt="" />
                   <img src={rec2} alt="" />
                
            </div>
        </div>
    );
};

export default MeetDoc;