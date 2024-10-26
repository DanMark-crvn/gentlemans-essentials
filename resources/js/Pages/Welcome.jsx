import ApplicationLogo from '@/Components/ApplicationLogo';
import BootstrapLayout from '@/Components/BootstrapLayout';
import MasculineWashFrontAndBack from '@/Components/MasculineWashFrontAndBack';
import MasulineWash from '@/Components/MasulineWash';
import Switch from '@/Components/Switch';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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

     // Function to handle scrolling to the specified section
     const scrollToSection = (event, sectionId) => {
        event.preventDefault(); // Prevent default link behavior
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        }
    };
    
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: 'products' },
        { name: 'About Us', href: 'about' },
        { name: 'Services', href: 'services' },
        { name: 'Contact Us', href: 'contact' }
    ];


    return (
        <BootstrapLayout>
            <Head title="Welcome" />
            <div className="bg-color">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full px-6 header">
                        <header class="container py-3 border">
                            <div class="row align-items-center g-2">
                                <div className='flex justify-content-around align-items-center z-1' data-aos="fade-down">
                                    <div class="">
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
                                                    onClick={(e) => item.href !== '/' && item.href !== '/products' && scrollToSection(e, item.href)} // Only apply scrolling to specific links
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
                                    <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start z-0" data-aos="fade-right">
                                        <h3 className='primary-font'>GE</h3>
                                        <h1 className='secondary-font'>Gentlemans Essential Masculine Wash</h1>
                                        <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
                                    </div>
                                    <MasulineWash animated={true} />
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl border border-primary mt-4" id='about'>
                        <main className="mt-6">
                            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-8 mb-4 pt-10 pb-10">
                                <MasulineWash animated={false}  />
                                <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
                                    <h1 className='secondary-font'>Gentlemans Essential Masculine Wash</h1>
                                    <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                                    <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center text-center pt-20 pb-20' id='products'> 
                                {/* Products section */} 
                                <h2 className='primary-font z-1 prod'>MASCULINE WASH</h2>
                                <MasculineWashFrontAndBack />
                                <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center text-center pt-64 pb-64 mt-4' id='services'> 
                                {/* Services section */} 
                                <h3 className='primary-font'>SERVICES</h3>
                                <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center text-center pt-64 pb-64 mt-4' id='contact'> 
                                {/* Contact section */} 
                                <h3 className='primary-font'>CONTACT</h3>
                                <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Gentle Essentials{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
}
