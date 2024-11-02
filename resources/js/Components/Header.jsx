import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import BootstrapLayout from './BootstrapLayout'
import ApplicationLogo from './ApplicationLogo'
import MasulineWash from '@/Components/MasulineWash';
import Switch from './Switch';
import { Link } from '@inertiajs/react';

export default function Header({auth = {}, onNavClick}) {
    const [isMobile, setIsMobile] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    const [selectedPage, setSelectedPage] = useState('Home'); // Track selected page

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

     // Function to handle navigation click
     const handleNavClick  = (pageName) => {
        setSelectedPage(pageName); // Update selected page
    };

    // Reinitialize AOS each time selectedPage changes
    useEffect(() => {
        AOS.refresh();
    }, [selectedPage]);


    // Define content for each page
    const pageContent = {
        "Home": {
            title: "GE",
            subtitle: "Gentleman's Essential Masculine Wash",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla."
        },
        "Product": {
            title: "Our Product",
            subtitle: "Explore Our Premium Products",
            description: "Discover high-quality products tailored to meet your needs and preferences."
        },
        "About Us": {
            title: "About Us",
            subtitle: "Learn More About Our Story",
            description: "We are committed to delivering the best experience and value to our customers."
        },
        "Services": {
            title: "Our Services",
            subtitle: "What We Offer",
            description: "We provide a range of exceptional services to support your lifestyle."
        },
        "Contact Us": {
            title: "Contact Us",
            subtitle: "Get in Touch",
            description: "We'd love to hear from you. Contact us for any inquiries or assistance."
        }
    };

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
                                        handleNavClick(item.name);
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
                <div 
                    key={selectedPage}  // Key to trigger re-render on page change
                    className="col-lg-12 d-flex flex-column flex-lg-row align-items-center justify-content-center py-3"
                >
                    <div className="text-heading p-3 col-lg-6 d-flex flex-column text-center text-lg-start z-0" data-aos="fade-right">
                        {/* FOR HOME */}
                        <h3 className='primary-font'>{pageContent[selectedPage].title}</h3>
                        <h1 className='secondary-font'>{pageContent[selectedPage].subtitle}</h1>
                        <p className='secondary-font'>{pageContent[selectedPage].description}</p>
                    </div>
                    <MasulineWash animated={true} />
                </div>
            </div>
        </header>
    </>
  )
}
