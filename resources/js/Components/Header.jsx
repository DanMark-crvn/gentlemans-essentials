import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import ApplicationLogo from './ApplicationLogo'
// import MasulineWash from '@/Components/MasulineWash';
import Switch from './Switch';
import { Link } from '@inertiajs/react';
import GEWrapper from './GEWrapper';
import HomeImage from '../../../public/imgs/Original/GEArt 1.png';
import InTextLogo from '../../../public/imgs/GE_S FINAL BRANDING (1)-07.png'
import HomeSubLogo from '../../../public/imgs/MASCULINE WASH.png';
import ProductImage from '../../../public/imgs/Original/GEArt 6.png';
import ProductVideo from '../../../public/imgs/Original/GE presents Masculine Wash (draft).mp4'
import AboutImage from '../../../public/imgs/Original/GEArt 7.png';
// import ServicesImage from '../../../public/imgs/Original/Artboard 3 copy.png';
import ResellerImage from '../../../public/imgs/Original/Banner.png';
// import ContactImage from '../../../public/imgs/Original/GEArt 1.png';
import ContactUsImage from '../../../public/imgs/Original/GEArt e.png';

export default function Header({auth = {}, onNavClick, currentPage }) {
    const [isMobile, setIsMobile] = useState(false);
    const [navVisible, setNavVisible] = useState(false);
    const [selectedPage, setSelectedPage] = useState(currentPage); // Track selected page

    // Synchronize the selectedPage state with currentPage from props
    useEffect(() => {
        setSelectedPage(currentPage);
    }, [currentPage]);

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
        { name: 'Reseller', href: '/reseller' },
        { name: 'Contact Us', href: '/contact' }
    ];    

     // Function to handle navigation click
     const handleNavClick  = (pageName) => {
        setSelectedPage(pageName); // Update selected page
        onNavClick(pageName); // Notify parent component
    };

    // Reinitialize AOS each time selectedPage changes
    useEffect(() => {
        AOS.refresh();
    }, [selectedPage]);


    // Define content for each page
    const pageContent = {
        "Home": {
            title: "GE",
            // subtitle: "Gentlemans Essential Masculine Wash", //--> This line I want to change the text into an imageLogo
            // description: "Confidence Below The Belt", //--> This line I also want to change the text into an sub-imageLogo
            subtitle: InTextLogo,
            description: HomeSubLogo,
            image: HomeImage
        },
        "Product": {
            title: "Our Product",
            // subtitle: "Explore Our Premium Products",
            // description: "Discover high-quality products tailored to meet your needs and preferences.",
            image: ProductImage,
            video: ProductVideo
        },
        "About Us": {
            title: "About Us",
            subtitle: "Learn More About Our Story",
            description: "We are committed to delivering the best experience and value to our customers.",
            image: AboutImage
        },
        "Reseller": {
            title: "Our Reseller",
            // subtitle: "What We Offer",
            // description: "We provide a range of exceptional services to support your lifestyle.",
            // image: ServicesImage
            image: ResellerImage
        },
        "Contact Us": {
            title: "Contact Us",
            // subtitle: "Get in Touch",
            // description: "We'd love to hear from you. Contact us for any inquiries or assistance.",
            // image: ContactImage
            image: ContactUsImage
        }
    };

    const handleLinkClick = (itemName) => {
        // Handle navigation logic here (e.g., setting active page)
        onNavClick(itemName); // Assuming this is your existing function to update the active page
        if (isMobile) {
            setNavVisible(false); // Close the navbar on mobile when a link is clicked
        }
    };

  return (
    
    <>
        <header className="w-full relative z-10" data-aos="fade-down">
            <div className="items-center gap-2">
                <div className='header-container-nav flex justify-around items-center'>
                    <div className="py-1">
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

                    <nav 
                        className={`navbar secondary-font text-pretty tracking-wide
                            ${isMobile ? 'mobile flex !flex-col absolute right-1 md:right-16' : ''} 
                            ${navVisible ? 'active' : ''} 
                            ${isMobile && !navVisible ? 'hidden opacity-0 transition-opacity duration-300' : 'flex opacity-100 transition-opacity duration-300'} 
                            ${isMobile ? 'transition-transform transform ease-in-out duration-300' : ''}`
                        } id="navbar"
                    >
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="border-2 border-black text-black rounded px-3 py-2"
                                onClick={() => handleLinkClick('Dashboard')} // Close navbar when clicked
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
                                        handleLinkClick(item.name); // Close navbar on mobile and update active page
                                    }}
                                    className={`navbarLinks !text-gray-50 px-3 py-2 me-2 ${isMobile ? '!text-gray-50 text-center' : ''} ${selectedPage === item.name ? 'active' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                            // </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
        {/* Pass selectedPage and pageContent to GEWrapper */}
        <GEWrapper selectedPage={selectedPage} pageContent={pageContent} />
    </>
  )
}
