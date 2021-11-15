import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mt-4">
                            <div className="left-container text-start">
                                <h3>Contact</h3>
                                <p className="mt-4 ">
                                    <h6>Phone</h6>
                                    <h6>+0987654321</h6><br />
                                    <h6>Email</h6>
                                    <h6>abc@gmail.com</h6><br />
                                    <h6>Address</h6>
                                    <h6>123,xyz Road,Mirpur,Dhaka</h6>
                                </p>
                            </div>
                        </div>


                        <div className="col-md-3 mt-4">
                            <div className="left-container text-start">
                                <h3 className="mx-5">About</h3>
                                <p className="mt-4 mx-5">
                                    <h6 className='mt-4'>Explore</h6>
                                    <h6 className='mt-4'>Special Offer</h6>
                                    <h6 className='mt-4'>About</h6>
                                
                                    <h6 className='mt-4'>Conatct</h6>
                                </p>
                            </div>
                        </div>


                        <div className="col-md-3 mt-4">
                            <div className="left-container text-start">
                                <h3>Opening Hours</h3>
                                <p className="mt-4 ">
                                    <h6 className='mt-4'>Mon:  &nbsp;&nbsp;&nbsp;&nbsp;9:30AM-8:00PM</h6>
                                    <h6 className='mt-4'>Tue:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:30AM-8:00PM</h6>
                                    <h6 className='mt-4'>Wed:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:30AM-8:00PM</h6>
                                    <h6 className='mt-4'>Thu:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:30AM-8:00PM</h6>
                                    <h6 className='mt-4'>Fri:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:30AM-8:00PM</h6>
                                </p>
                            </div>
                        </div>


                        <div className="col-md-3 mt-4">
                            <div className="left-container text-start">
                                <h3 className="mx-4">Support</h3>
                                <p className="mt-4 mx-4">
                                    <h6 className='mt-4'>24/7 Service</h6>
                                    <h6 className='mt-4'>Service Offer</h6>
                                    <h6 className='mt-4'>Make Call</h6>
                                    <h6 className='mt-4'>Buy Offer</h6>
                                    <h6 className='mt-4'>Contact Support</h6>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-5 text-center">
                    <small>Car Zone©All rights reserved 2021.</small>
                </p>
            </div>
        </div>
    );
};

export default Footer;