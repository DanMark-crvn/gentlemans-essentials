import React, { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';

export default function Footer({onNavClick, currentPage}) {
    const handleNavClick = (pageName) => {
        if (onNavClick) {
            onNavClick(pageName); // Notify parent about the selected page
        }
    };

    return (
        <div className="">
            <div className="container">
                <div className="row text-center text-md-left footerLinks">
                    <div className="col-md-4 mb-4 mb-md-0 footerLinksDivOne">
                        <ApplicationLogo footer={false} />
                        <p className='mt-2'>
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <a href="https://www.facebook.com/thegentlemansessentials.ph/" className="me-2 fs-2 transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-facebook"></i>
                            </a>
                            {/* <a href="#" className="me-2 fs-2 transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-twitter"></i>
                            </a> */}
                            <a href="https://www.instagram.com/thegentlemansessentials.ph/" className="me-2 fs-2 transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-instagram"></i>
                            </a>
                            {/* <a href="#" className="me-2 fs-2 transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-linkedin"></i>
                            </a> */}
                            <a href="https://www.tiktok.com/@gentlemansessentialsph" className="me-2 fs-2 transition-transform duration-300 transform hover:scale-125">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-8 d-flex justify-content-around footerLinksDivTwo'>
                        <div className="col-md-2 mb-4 mb-md-0 py-md-5 py-0">
                            <h5>About</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" onClick={() => handleNavClick("About Us")}>About Us</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Product")}>Product</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Services")}>Services</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4 mb-md-0 py-md-5 py-0">
                            <h5>Support</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Support</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Knowledge base</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Contact Us")}>Lorem</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4 mb-md-0 py-md-5 py-0">
                            <h5>Jobs</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#" onClick={() => handleNavClick("About Us")}>Our team</a></li>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4 mb-md-0 py-md-5 py-0">
                            <h5>Product</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" onClick={() => handleNavClick("Product")}>GentleMan's</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Product")}>Essentials</a></li>
                                <li><a href="#" onClick={() => handleNavClick("Product")}>Masculine Wash</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex flex-column flex-md-row justify-content-between px-2 text-center">
                    <div className="">
                        <p className="mb-0">Copyright © 2024, Gentleman's Essentials. All Rights Reserved.</p>
                    </div>
                    <div className="">
                        <p className="mb-0">
                            <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
