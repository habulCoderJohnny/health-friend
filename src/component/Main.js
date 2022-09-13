import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner/Banner';
import FAQ from './FAQ';
import Footer from './Footer';
import Navbar from './Navbar';
import Exprience from './Services/Exprience';
import Services from './Services/Services';
import Testimonial from './Testimonial';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Exprience></Exprience>
            <Appointment></Appointment>
            <FAQ></FAQ>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Main;