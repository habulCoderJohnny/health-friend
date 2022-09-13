import React from 'react';
import fb from '../../src/assets/social/fb.png';
import insta from '../../src/assets/social/instagram.png';
import google from '../../src/assets/social/google.png';
import tweet from '../../src/assets/social/tweet.png';
import yt from '../../src/assets/social/youtube.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
  <div>
  <a className="text-2xl "><span className='text-primary'>Doc</span><span className='text-secondary'>mic.</span></a>

    <p>simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has bee.</p> <br />
    <div>
    <div className="grid grid-flow-col gap-4">
      <a><img src={fb} alt="social"  /></a>
      <a><img src={insta} alt="social"  /></a>
      <a><img src={google} alt="social"/></a>
      <a><img src={tweet} alt="social"/></a>
      <a><img src={yt} alt="social"/></a>
      <a></a>
    </div>
  </div> <br />

    Copyright @2022 DocMic All Rights Reserved
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title text-secondary">Opening Hours</span> 
    <a className="link link-hover text-primary">Mon- Tue</a> <span className=''>08:00 AM- 05:00 PM</span>
    <a className="link link-hover text-primary">Mon- Tue</a> <span className=''>08:00 AM- 05:00 PM</span>
   
  </div>
</footer>
        </div>
    );
};

export default Footer;