import MasculineWashFrontAndBack from '@/Components/MasculineWashFrontAndBack';
import MasculineWashGold from '@/Components/MasculineWashGold';
import MasulineWash from '@/Components/MasulineWash';
import { Button, Input } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Contact from './Contact/Contact';
import GuestLayout from '@/Layouts/GuestLayout';
import Product from './Product/Product';
import About from './About/About';
import Services from './Services/Services';
import GEHome from '@/Components/GEHome';
import WrapperGE from '../../imgs/GEWrapper.png';
import GEWet from '@/Components/GEWet';
import WETGE from '../../imgs/WETGE.png';
import GEBlack from '@/Components/GEBlack';
import GEWhite from '@/Components/GEWhite';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // Initialize activePage state here
    const [activePage, setActivePage] = useState('Home');
    return (
        <GuestLayout setActivePage={setActivePage}>
            <Head title="Welcome" />
            {activePage === 'Home' && (
                <div className='home w-full d-flex flex-column justify-content-center align-items-center'> 
                    {/* //TODO: Home Content Here */} 

                    {/* //? SECTION 1 */}
                    <div className='border border-warning w-full d-flex justify-content-center h-screen mb-4'>
                        <div className="max-w-2xl px-6 lg:max-w-7xl d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-8 pt-10 pb-10 border border-success">
                            <MasulineWash animated={false}  />
                            <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
                                <h1 className='secondary-font'>Gentlemans Essential Masculine Wash</h1>
                                <p className='secondary-font'>a gentle cleanser used for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of the area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
                                {/* <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p> */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION 1 END */}

                    {/* //? SECTION 2 */}
                    <div className='w-full d-flex justify-content-center align-items-center bg-[#b1afb7] h-screen'>                        {/* <GEWet /> */}
                        <GEWet />
                        <div className='max-w-2xl px-6 lg:max-w-full position-absolute d-flex justify-content-end align-items-center text-center pt-20 pb-20 text-white'> 
                            {/* <MasculineWashGold />
                            <MasculineWashFrontAndBack />
                            <GEHome /> */}
                            <div className="lg:px-20 col-lg-5 d-flex flex-column text-center text-lg-end" data-aos="fade-up" data-aos-duration="1500">
                                <p className='secondary-font fs-3 p-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                            </div>
                        </div>
                    </div>
                    {/* SECTION 2 END */}

                    {/* //? SECTION 3 */}
                    <div className='sectionThree w-full d-flex justify-content-evenly h-screen backdrop-blur-md bg-slate-400'>
                        <div className='w-full d-flex flex-column justify-content-center align-items-center text-center border border-info'> 
                            <GEWhite />
                        </div>
                        <div className='w-full d-flex flex-column justify-content-center align-items-center text-center border border-info'> 
                            <GEBlack />
                        </div>
                    </div>
                    {/* SECTION 3 END */}

                    {/* //? SECTION 4 */}
                    <div className='max-w-2xl px-6 lg:max-w-7xl d-flex flex-column justify-content-center align-items-center text-center pt-64 pb-64 mt-4 px-md-5'> 
                        <h3 className='primary-font px-0 px-md-5'>Subscribe to Newsletter!</h3>
                        <p className='secondary-font px-0 px-md-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                        <div className='w-3-5 d-flex justify-content-center align-items-center'>
                            <div className="input-group py-4">
                                <span className="input-group-text" id="basic-addon2">@</span>
                                <Input 
                                    type="email" 
                                    className="form-control h-12" 
                                    placeholder="Enter your email here!" 
                                    aria-label="Recipient's email" aria-describedby="basic-addon2" 
                                />
                                <Button 
                                    className="btn btn-outline-dark custom-hover" 
                                    type="button" id="button-addon2" 
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* SECTION 4 END */}
                </div>
            )}
            {activePage === 'Product' && (
                <div className=''> 
                    {/* Product Content Here */} 
                    <Product />
                </div>
            )}
            {activePage === 'About Us' && (
                <div> 
                    {/* About Us Content Here */} 
                    <About />
                </div>
            )}
            {activePage === 'Services' && (
                <div> 
                    {/* Services Content Here */} 
                    <Services />
                </div>
            )}
            {activePage === 'Contact Us' && (
                <div className=''> 
                    {/* Contact Us Content Here */} 
                    <Contact />
                </div>
            )}
        </GuestLayout>
    );
}
