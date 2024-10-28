import React from 'react';
import ApplicationLogo from './ApplicationLogo';

export default function Footer() {
    return (
        <footer className="py-4 mt-5">
            <div className="container">
                <div className="row text-center text-md-left footerLinks">
                    <div className="col-md-4 mb-4 mb-md-0 footerLinksDivOne">
                        <ApplicationLogo footer={false} />
                        <p className='mt-2'>
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                            Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <a href="#" className="me-2 fs-2">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="me-2 fs-2">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="me-2 fs-2">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="me-2 fs-2">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="#" className="me-2 fs-2">
                                <i class="bi bi-tiktok"></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-8 d-flex justify-content-around footerLinksDivTwo'>
                        <div className="col-md-2 mb-4 mb-md-0 py-8">
                            <h5>About us</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4 mb-md-0 py-8">
                            <h5>Support</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Knowledge base</a></li>
                                <li><a href="#">Lorem</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4 mb-md-0 py-8">
                            <h5>Jobs</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Our team</a></li>
                                <li><a href="#">Leadership</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 mb-4 mb-md-0 py-8">
                            <h5>Product</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">GentleMan's</a></li>
                                <li><a href="#">Essentials</a></li>
                                <li><a href="#">Masculine Wash</a></li>
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
        </footer>
    );
}
