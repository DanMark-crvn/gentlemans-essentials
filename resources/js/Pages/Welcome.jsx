import MasculineWashFrontAndBack from '@/Components/MasculineWashFrontAndBack';
import MasculineWashGold from '@/Components/MasculineWashGold';
import MasulineWash from '@/Components/MasulineWash';
import { Button, Input } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Contact from './Contact/Contact';
import GuestLayout from '@/Layouts/GuestLayout';
import Product from './Product/Product';
import Reseller from './Reseller/Reseller';
import About from './About/About';
import GEHome from '@/Components/GEHome';
import WrapperGE from '../../imgs/GEWrapper.png';
import GEWet from '@/Components/GEWet';
import WETGE from '../../imgs/WETGE.png';
import GEBlack from '@/Components/GEBlack';
import GEWhite from '@/Components/GEWhite';
// import GEHomeBlack from '../../imgs/GEBlack.png'
import GEHomeBlack from '../../imgs/GEBlackEdited.png'
import GEHomeWhite from '../../imgs/GEWET.png'
// import GEHomeWhite from '../../imgs/GEWhite.jpg'
import HomePicture from '@/Components/HomePicture';
import HomeWrapperImage from '@/Components/HomeWrapperImage';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // Initialize activePage state here
    const [activePage, setActivePage] = useState('Home');

    return (
        <GuestLayout setActivePage={setActivePage}>
            <Head title="Welcome" />
            {activePage === 'Home' && (
                <div className='home w-full flex flex-col items-center justify-center'> 
                    {/* //TODO: Home Content Here */} 

                    {/* //? SECTION 1 */}
                    <div className='w-full flex justify-center lg:h-screen mb-4'>
                        <div className="max-w-2xl px-6 lg:max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 py-10">
                            {/* <MasulineWash animated={false}  /> */}
                            <HomePicture />
                            <div className="p-3 w-full lg:w-1/2 flex flex-col text-center lg:text-start" data-aos="fade-up" data-aos-duration="1500">
                                <h1 className='secondary-font text-4xl font-medium'>Gentlemans Essential Masculine Wash</h1>
                                <p className='secondary-font py-4'>a gentle cleanser used for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of the area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
                                {/* <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p> */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION 1 END */}

                    {/* //? SECTION 2 */}
                    <div className='w-full flex justify-center items-center'>
                        {/* <GEWet /> */}
                        <HomeWrapperImage homeImageWrapper={false} />
                        <div className='w-full absolute flex justify-center lg:justify-end items-center text-center text-white'> 
                            {/* <MasculineWashGold />
                            <MasculineWashFrontAndBack />
                            <GEHome /> */}
                            <div className="lg:w-1/2 flex text-center justify-center" data-aos="fade-up" data-aos-duration="1500">
                                <p className='secondary-font text-2xl lg:text-3xl p-10'>Confidence Where It Counts</p>
                            </div>
                        </div>
                    </div>
                    {/* SECTION 2 END */}

                    {/* //? SECTION 2.1 */}
                    <div className='w-full flex justify-center items-center'>
                        {/* <GEWet /> */}
                        <HomeWrapperImage homeImageWrapper={true} />
                        <div className='w-full absolute flex justify-center lg:justify-end items-center text-center text-white'> 
                            {/* <MasculineWashGold />
                            <MasculineWashFrontAndBack />
                            <GEHome /> */}
                            <div className="lg:w-1/2 flex text-center justify-center" data-aos="fade-up" data-aos-duration="1500">
                                <p className='secondary-font text-2xl lg:text-3xl p-10'>Strength You Can Feel</p>
                            </div>
                        </div>
                    </div>
                    {/* SECTION 2.1 END */}

                    {/* //? SECTION 3 */}
                    {/* <div className='sectionThree w-full flex justify-evenly h-screen backdrop-blur-sm'>
                        <div className='w-full flex flex-col justify-center items-center text-center relative'  data-aos="fade-right">
                            Pseudo-element for blurred background
                            <div 
                                className='absolute inset-0 bg-cover bg-center' 
                                style={{ 
                                    backgroundImage: `url(${GEHomeWhite})`, 
                                    filter: 'blur(4px)', 
                                    zIndex: '-1'  // Ensures the background stays behind the content
                                }}
                            ></div> 
                            <GEWhite />
                        </div>
                        <div className='w-full flex flex-col justify-center items-center text-center relative'  data-aos="fade-left"> 
                            Pseudo-element for blurred background
                            <div 
                                className='absolute inset-0 bg-cover bg-center' 
                                style={{ 
                                    backgroundImage: `url(${GEHomeBlack})`, 
                                    filter: 'blur(4px)', 
                                    zIndex: '-1'  // Ensures the background stays behind the content
                                }}
                            ></div> 
                            <GEBlack />
                        </div>
                    </div> */}
                    <div className="flex flex-col md:flex-row w-full h-screen">
                        {/* Left Section */}
                        <div className="flex-1 bg-gray-900 text-white flex flex-col justify-center items-center px-8 relative" data-aos="fade-right">
                            <img
                            src={GEHomeBlack}
                            alt="Black GE"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            />
                            <div className="relative z-10 text-center">
                                <h1 className="text-3xl md:text-4xl font-bold mt-4">
                                    CONFIDENCE BELOW THE BELT
                                </h1>
                                <p className="text-lg mt-2 text-yellow-500 font-bold">Fresh as new</p>
                                {/* <button className="mt-6 bg-amber-500 text-black py-2 px-4 rounded">
                                    Learn More
                                </button> */}
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 bg-purple-700 text-white flex flex-col justify-center items-center px-8 relative" data-aos="fade-left">
                            <img
                            src={GEHomeWhite}
                            alt="WET GE"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            />
                            <div className="relative z-10 text-center">
                                <h1 className="text-3xl md:text-4xl font-bold mt-4">
                                    Masculine Wash
                                </h1>
                                <p className="text-lg mt-2 text-yellow-500 font-bold">
                                    CLEANSING AND INVIGORATING
                                </p>
                                {/* <button className="mt-6 bg-amber-500 text-black py-2 px-4 rounded">
                                    Learn More
                                </button> */}
                            </div>
                        </div>
                    </div>
                    {/* SECTION 3 END */}

                    {/* //? SECTION 4 */}
                    {/* <div className='max-w-2xl px-6 lg:max-w-7xl flex flex-col justify-center items-center text-center pt-16 pb-16 mt-4 md:px-20 border border-danger'> 
                        <h3 className='primary-font px-0 md:px-20'>Subscribe to Newsletter!</h3>
                        <p className='secondary-font px-0 md:px-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
                        <div className='w-3/5 flex justify-center items-center'>
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
                    </div> */}
                    {/* SECTION 4 END */}
                </div>
            )}
            {activePage === 'Product' && (
                <div className='flex flex-col justify-center items-center gap-3'> 
                    {/* Product Content Here */} 
                    <Product setActivePage={setActivePage} />
                </div>
            )}
            {activePage === 'About Us' && (
                <div> 
                    {/* About Us Content Here */} 
                    <About />
                </div>
            )}
            {activePage === 'Reseller' && (
                <div className='lg:h-screen flex justify-center items-center'> 
                    {/* Reseller Content Here */} 
                    <Reseller />
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
