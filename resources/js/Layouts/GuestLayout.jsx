import ApplicationLogo from '@/Components/ApplicationLogo';
import BootstrapLayout from '@/Components/BootstrapLayout';
import Footer from '@/Components/Footer';
import GEWrapper from '@/Components/GEWrapper';
import Header from '@/Components/Header';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import React from 'react';

export default function GuestLayout({ children, setActivePage }) {    
    const [selectedPage, setSelectedPage] = useState("Home");
    const handleNavClick = (pageName) => {
        setSelectedPage(pageName);
        setActivePage(pageName); // Inform parent if needed
    };

    return (
        <BootstrapLayout>
            <div className="bg-color overflow-hidden">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FFC300] selection:text-white">
                    <div className="relative w-full header">
                        {/* <Header onNavClick={(page) => setActivePage(page)} currentPage="home" /> */}
                        <Header onNavClick={handleNavClick} currentPage={selectedPage} />
                    </div>
                    
                    {/* <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl mt-4 border border-danger">
                        <main className="mt-6 w-full">
                            {children}
                        </main>
                    </div> */}
                    <div className="relative w-full mt-4">
                        <main className="mt-6">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
            <footer className="footer py-8 text-center text-sm text-black dark:text-white/70">
                {/* Gentle Essentials{laravelVersion} (PHP v{phpVersion}) */}
                <Footer onNavClick={handleNavClick} currentPage={selectedPage} />
            </footer>
        </BootstrapLayout>
    );
}
