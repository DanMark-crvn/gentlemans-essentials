import React, { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';

export default function Footer({onNavClick, currentPage}) {
    const handleNavClick = (pageName) => {
        if (onNavClick) {
            onNavClick(pageName); // Notify parent about the selected page
        }
    };

    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="flex text-center md:text-left mt-2 footerLinks">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col justify-center items-center footerLinksDivOne">
                        <ApplicationLogo footer={false} />
                        <p className='mt-2 text-base text-center text-black p-2'>
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.
                        </p>
                        <div className="flex gap-3 justify-center p-2 cursor-pointer">
                            <a href="https://www.facebook.com/thegentlemansessentials.ph/" target="_blank" rel="noopener noreferrer" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-facebook"></i>
                            </a>
                            {/* <a href="#" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-twitter"></i>
                            </a> */}
                            <a href="https://www.instagram.com/thegentlemansessentials.ph/" target="_blank" rel="noopener noreferrer" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-instagram"></i>
                            </a>
                            {/* <a href="#" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-linkedin"></i>
                            </a> */}
                            <a href="https://www.tiktok.com/@gentlemansessentialsph" target="_blank" rel="noopener noreferrer" className="me-2 text-3xl transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-2/3 flex justify-evenly footerLinksDivTwo py-3'>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="text-xl pb-1 text-black font-medium">About</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" onClick={() => handleNavClick("About Us")}>About Us</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Product")}>Product</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Reseller")}>Reseller</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="text-xl pb-1 text-black font-medium">Support</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Support</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Knowledge base</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Lorem</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="text-xl pb-1 text-black font-medium">Jobs</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#" onClick={() => handleNavClick("About Us")}>Our team</a></li>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="md:w-1/6 py-2 md:py-12 text-center">
                            <h5 className="text-xl pb-1 text-black font-medium">Product</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" onClick={() => handleNavClick("Product")}>GentleMan's</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Product")}>Essentials</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Product")}>Masculine Wash</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-black" />
                <div className="flex flex-col md:flex-row justify-between px-2 text-center">
                    <div className="">
                        <p className="mb-0 text-black">Copyright © 2024, Gentleman's Essentials. All Rights Reserved.</p>
                    </div>
                    <div className="">
                        <p className="mb-0 text-black">
                            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
