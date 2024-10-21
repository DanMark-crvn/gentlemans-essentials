import ApplicationLogo from '@/Components/ApplicationLogo';
import BootstrapLayout from '@/Components/BootstrapLayout';
import MasulineWash from '@/Components/MasulineWash';
import Switch from '@/Components/Switch';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to handle resizing
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust this value for the desired breakpoint (768px for tablet)
    };

    // useEffect to handle resizing and update `isMobile`
    useEffect(() => {
        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <BootstrapLayout>
            <Head title="Welcome" />
            <div className="bg-color">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full px-6 header">
                        <header class="container py-5 border">
                            <div class="row align-items-center g-2">
                                <div className='border border-primary flex justify-content-around align-items-center'>
                                    <div class="">
                                        {/* <!-- LOGO --> */}
                                        <Link href="/">
                                            <ApplicationLogo />
                                        </Link>
                                    </div>
                                    {/* Show Switch on mobile and tablet sizes */}
                                    {isMobile ? (
                                        <div onClick={toggleMenu}>
                                            <Switch />
                                        </div>
                                    ) : null}

                                    {/* Show links conditionally */}
                                    <nav className={`navbar ${isMobile ? (menuOpen ? 'd-block' : 'd-none') : 'd-flex'}`} id="navbar">
                                        {auth.user ? (
                                            <Link
                                                href={route('dashboard')}
                                                className="btn btn-outline-black rounded px-3 py-2"
                                            >
                                                Dashboards
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Home
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Products
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    About Us
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Services
                                                </Link>
                                                <Link
                                                    href="/"
                                                    className="btn btn-outline-black rounded px-3 py-2 me-2"
                                                >
                                                    Contact Us
                                                </Link>
                                            </>
                                        )}
                                    </nav>
                                </div>
                                <div className="col-lg-12 d-flex flex-column flex-lg-row align-items-center justify-content-center border">
                                    <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start border">
                                        <h3 className='primary-font'>GE</h3>
                                        <h1 className='secondary-font'>Gentlemans Essential Masculine Wash</h1>
                                        <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
                                    </div>
                                    <MasulineWash />
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </BootstrapLayout>
    );
}
