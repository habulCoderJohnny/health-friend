
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import patient from "../assets/patient.png";
import test2 from "../assets/vectors/test-2.png";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Navigation } from "swiper";

const Testimonial = () => {
    return (
        <div className="my-6">
            <h1 className='text-secondary text-center text-xl'>Testimonial</h1>
            <h1 className='text-center text-4xl font-bold mb-5'>What they say?</h1>

            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    <SwiperSlide>
                        <div className="hero bg-white rounded-md">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={patient} className="max-w-lg rounded-lg"/>
                              
                                <div>  
                                </div>
                                <div className="w-25 px-10">
                                    <h1 className="text-2xl">David Jeams</h1>
                                    <h1 className="text-xl">Pratient</h1>
                                    <p className="py-6 text-accent">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                                    <img src={test2} alt="" />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero bg-white rounded-md">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={patient} className="max-w-lg rounded-lg " />
                                <div className="w-25 px-10">
                                    <h1 className="text-2xl">Glynn maxwell</h1>
                                    <h1 className="text-xl">Pratient</h1>
                                    <p className="py-6 text-accent">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <img src={test2} alt="" />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero bg-white rounded-md">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={patient} className="max-w-lg rounded-lg " />
                                <div className="w-25 px-10">
                                    <h1 className="text-2xl">David Warner</h1>
                                    <h1 className="text-xl">Pratient</h1>
                                    <p className="py-6 text-accent">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <img src={test2} alt="" />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                 


                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;