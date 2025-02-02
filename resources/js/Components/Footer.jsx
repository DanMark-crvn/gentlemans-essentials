import React, { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';
import SubMarkLogo from '../../imgs/GE Sticker.png';

export default function Footer({onNavClick, currentPage}) {
    const handleNavClick = (pageName) => {
        if (onNavClick) {
            onNavClick(pageName); // Notify parent about the selected page
        }
    };

    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="flex justify-center items-center text-center gap-6 md:text-left mt-2 footerLinks">
                    <img src={SubMarkLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                    <div className="w-full lg:w-auto md:w-1/3 mb-4 md:mb-0 flex flex-col justify-center items-center footerLinksDivOne">
                        <ApplicationLogo footer={false} />
                        {/* <p className='secondary-font mt-2 text-base text-pretty tracking-wide text-center text-black p-2'>
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.
                        </p> */}
                        <div className="flex gap-3 justify-center p-2 cursor-pointer">
                            <a href="https://www.facebook.com/thegentlemansessentials.ph/" target="_blank" rel="noopener noreferrer" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-facebook text-white"></i>
                            </a>
                            {/* <a href="#" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-twitter"></i>
                            </a> */}
                            <a href="https://www.instagram.com/thegentlemansessentials.ph/" target="_blank" rel="noopener noreferrer" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-instagram text-white"></i>
                            </a>
                            {/* <a href="#" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-linkedin"></i>
                            </a> */}
                            <a href="https://www.tiktok.com/@gentlemansessentialsph" target="_blank" rel="noopener noreferrer" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-tiktok text-white"></i>
                            </a>
                        </div>
                        <div>
                            <p className='secondary-font text-lg text-white'>Follow us for updates!</p>
                        </div>
                    </div>
                    {/* <div className='md:w-2/3 flex justify-evenly footerLinksDivTwo py-3'>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="primary-font text-3xl pb-1 text-black font-semibold">About</h5>
                            <ul className="list-unstyled">
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("About Us")}>About Us</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Product")}>Product</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Reseller")}>Reseller</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Contact Us")}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="primary-font text-3xl pb-1 text-black font-semibold">Support</h5>
                            <ul className="list-unstyled">
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Contact Us")}>Support</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Contact Us")}>Knowledge base</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Contact Us")}>Lorem</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="primary-font text-3xl pb-1 text-black font-semibold">Jobs</h5>
                            <ul className="list-unstyled">
                                <li><a className="secondary-font text-base" href="#">Jobs</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("About Us")}>Our team</a></li>
                                <li><a className="secondary-font text-base" href="#">Leadership</a></li>
                                <li><a className="secondary-font text-base" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="primary-font text-3xl pb-1 text-black font-semibold">Product</h5>
                            <ul className="list-unstyled">
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Product")}>GentleMan's</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Product")}>Essentials</a></li>
                                <li><a className="secondary-font text-base" href="#" onClick={() => handleNavClick("Product")}>Masculine Wash</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                <hr className="my-4 border-white" />
                <div className="flex flex-col md:flex-row justify-between px-2 text-center">
                    <div className="">
                        <p className="secondary-font text-base mb-0 text-white">Copyright © 2024, Gentleman's Essentials. All Rights Reserved.</p>
                    </div>
                    <div className="">
                        <p className="secondary-font text-base mb-0 text-white">
                            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
