import React, { useEffect, useState } from 'react'
import BootstrapLayout from './BootstrapLayout'
import ApplicationLogo from './ApplicationLogo'
import MasulineWash from '@/Components/MasulineWash';
import Switch from './Switch';
import { Link } from '@inertiajs/react';

export default function Header({auth = {}, onNavClick, currentPage}) {
    const [isMobile, setIsMobile] = useState(false);
    const [navVisible, setNavVisible] = useState(false);

    // Function to handle resizing
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 987); // Adjust this value for the desired breakpoint (768px for tablet 798)
    };

    // useEffect to handle resizing and update `isMobile`
    useEffect(() => {
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to toggle nav visibility
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Product', href: '/product' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact Us', href: '/contact' }
    ];
    // Dynamic content based on currentPage
    const pageContent = {
        home: {
            title: 'Gentlemans Essential Masculine Wash',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.',
        },
        product: {
            title: 'Product',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.',
        },
        about: {
            title: 'About Us',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.',
        },
        services: {
            title: 'Services',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.',
        },
        contact: {
            title: 'Contact',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.',
        },
    };

    const currentContent = pageContent[currentPage] || pageContent.home; // Default to home if not found

  return (
    <>
        <header className="container py-3">
            <div className="row align-items-center g-2">
                <div className='flex justify-content-around align-items-center z-1' data-aos="fade-down">
                    <div className="">
                        {/* <!-- LOGO --> */}
                        <Link href="/">
                            <ApplicationLogo />
                        </Link>
                    </div>
                    {/* Show Switch on mobile and tablet sizes */}
                    {isMobile ? (
                        <div className="cursor-pointer">
                            <Switch navVisible={navVisible} toggleNav={toggleNav} />
                        </div>
                    ) : null}

                    <nav className={`navbar ${isMobile ? 'mobile position-absolute' : ''} ${navVisible ? 'active' : ''} ${isMobile && !navVisible ? 'd-none' : 'd-flex'}`} id="navbar">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="btn btn-outline-black rounded px-3 py-2"
                            >
                                Dashboards
                            </Link>
                        ) : (
                            // <>
                            navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent default link behavior
                                        onNavClick(item.name); // Update the activePage state
                                    }}
                                    className={`btn btn-outline-black rounded px-3 py-2 me-2 ${isMobile ? 'text-white' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                            // </>
                        )}
                    </nav>
                </div>
                <div className="col-lg-12 d-flex flex-column flex-lg-row align-items-center justify-content-center py-3">
                    <div className="text-heading p-3 col-lg-6 d-flex flex-column text-center text-lg-start z-0" data-aos="fade-right">
                        {/* FOR HOME */}
                        <h3 className='primary-font'>GE</h3>
                        <h1 className='secondary-font'>{currentContent.title}</h1>
                        <p className='secondary-font'>{currentContent.description}</p>
                    </div>
                    <MasulineWash animated={true} />
                </div>
            </div>
        </header>
    </>
  )
}
