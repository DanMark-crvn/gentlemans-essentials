// import MasulineWash from '@/Components/MasulineWash';
import { Button, Input } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Contact from './Contact/Contact';
import GuestLayout from '@/Layouts/GuestLayout';
import Product from './Product/Product';
import Reseller from './Reseller/Reseller';
import About from './About/About';
// import GEHome from '@/Components/GEHome';
// import WrapperGE from '../../../public/imgs/GEWrapper.png';
// import GEWet from '@/Components/GEWet';
// import WETGE from '../../../public/imgs/WETGE.png';
// import GEBlack from '@/Components/GEBlack';
// import GEWhite from '@/Components/GEWhite';
// import GEHomeBlack from '../../imgs/GEBlack.png'
// import GEHomeBlack from '../../../public/imgs/GEBlackEdited.png'
// import GEHomeWhite from '../../../public/imgs/GEWET.png'
// import GEHomeWhite from '../../imgs/GEWhite.jpg'
import HomePicture from '@/Components/HomePicture';
import HomeWrapperImage from '@/Components/HomeWrapperImage';
import GESticker from '../../../public/imgs/GE Sticker.png';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // Initialize activePage state here
    const [activePage, setActivePage] = useState('Home');

    // Handle the "Get Yours Now" click
    const handleGetYoursNowClick = () => {
        // Change the active page to "Contact Us"
        setActivePage('Reseller');
    };

    return (
        <GuestLayout setActivePage={setActivePage}>
            <Head title="Welcome" />
            {activePage === 'Home' && (
                <div className='home w-full flex flex-col items-center justify-center bg-[#0A0203]'> 
                    {/* //TODO: Home Content Here */} 

                    {/* //? SECTION 1 */}
                    <div className='w-full flex justify-center lg:h-screen bg-black'>
                        <div className="max-w-2xl lg:max-w-full flex flex-col lg:flex-row items-center">
                            <div className='w-full h-full'>
                                <HomePicture />
                            </div>
                            <div className="p-3 lg:mr-24 w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-end text-center lg:text-start" data-aos="fade-up" data-aos-duration="1500">
                                <img src={GESticker} alt="GE Sticker" className="w-1/3 h-auto" />
                                <div className=''>
                                    <h1 className='primary-font text-7xl font-semibold text-white lg:text-end'>A NEW ERA FOR MEN</h1>
                                    <p className='secondary-font py-4 text-pretty text-lg text-justify tracking-wide text-white'>The newest premium gentle cleanser for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of men’s private area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION 1 END */}

                    {/* //? SECTION 2 */}
                    <div className='w-full flex justify-center items-start relative'>
                        <HomeWrapperImage homeImageWrapper={false} />
                        <div className='w-full h-full absolute flex flex-col justify-around lg:justify-between md:justify-between items-center lg:items-end md:items-end text-center text-white'> 
                            <div className="lg:w-3/5 flex text-center justify-center" data-aos="fade-up" data-aos-duration="1500">
                                <h3 className='primary-font text-4xl lg:text-8xl lg:tracking-wide md:text-6xl font-semibold p-10'>Sell with <span className='text-yellow-500 secondary-font'>Confidence</span></h3>
                            </div>
                            {/* "Become a Reseller" Positioned at Bottom Right */}
                            <div className="w-full flex justify-center lg:justify-end md:justify-end lg:p-32 lg:px-80 md:p-16 md:px-20">
                                <Button onClick={handleGetYoursNowClick} className="text-lg bg-yellow-500 bg-opacity-95 text-black px-4 py-2 rounded-sm font-semibold shadow-2xl">
                                    Become a Reseller
                                </Button>
                            </div>
                        </div>
                        {/* Text Wrapper
                        <div className="absolute w-full top-40 transform -translate-y-1/2 flex flex-col items-center lg:items-end md:items-end text-white px-4 border">
                            <h3 className="primary-font text-4xl lg:text-8xl md:text-6xl font-semibold">
                                Sell with <span className="text-yellow-500 secondary-font">Confidence</span>
                            </h3>
                        </div>

                        "Become a Reseller" Positioned at Bottom Right
                        <div className="absolute bottom-6 right-6 lg:right-10 border">
                            <p className="text-lg bg-yellow-500 px-4 py-2 rounded-lg font-semibold">
                                Become a Reseller
                            </p>
                        </div> */}
                    </div>
                    {/* SECTION 2 END */}

                    {/* //? SECTION 2.1 */}
                    <div className='w-full flex justify-center items-center relative '>
                        {/* <GEWet /> */}
                        <HomeWrapperImage homeImageWrapper={true} />
                        <div className='w-full absolute flex justify-center lg:justify-end items-center text-center text-white p-4'> 
                            <div className="lg:w-1/2 flex flex-col text-center lg:text-end justify-center gap-4 mx-24" data-aos="fade-up" data-aos-duration="1500">
                                {/* Heading */}
                                <h3 className='secondary-font text-4xl lg:text-8xl md:text-6xl'>
                                    BECOME A <span className="text-yellow-400 font-semibold">GENTLEMAN</span>
                                </h3>
                                <p className='museum-inline text-4xl lg:text-6xl md:text-6xl mt-2'>ORDER NOW!</p>

                                {/* Shopee & TikTok Icons */}
                                <div className="flex justify-center lg:justify-end gap-4 mt-6">
                                    <a href="https://shopee.ph/Gentleman's-Essentials-Masculine-Wash-(150ml)-i.1338092442.27558862443" className='bg-white rounded-lg p-1 transition-transform duration-300 transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                                        {/* <img src="/path-to-your-shopee-icon.png" alt="Shopee" className="w-12 h-12"/> */}
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/shopee.png" alt="shopee"/>
                                        {/* <i className="bi bi-bag-check-fill text-white text-5xl"></i> */}
                                    </a>
                                    <a href="https://www.tiktok.com/view/product/1730838579313347519?checksum=eb38a16f7111ec63a3d408009d97e6056ad1df667e6ac95a882ddbb874be8525&og_info=%7B%22title%22%3A%22Gentleman%E2%80%99s+Masculine+Wash+Premium+Invigorating+Men%27s+Grooming+Skin+Care+Essentials%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-va.ibyteimg.com%5C%2Ftos-maliva-i-o3syd03w52-us%5C%2F69843244a6994f8d8e76b3b03194327f~tplv-o3syd03w52-resize-webp%3A260%3A260.webp%3Ffrom%3D1826719393%22%7D&sec_user_id=MS4wLjABAAAA3HHLFggAwawdZdHD_TP7bsrMqZdXyrQ_ApXv6gFUdZJ447GAtaUHshbWxmpC6iVS&share_app_id=1180&share_link_id=E1AA76E3-B471-46E2-B56B-001F77C7C9A1&social_share_type=15&timestamp=1732860484&trackParams=%7B%22traffic_source_list%22%3A%5B6%5D%2C%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%2C%22traffic_source%22%3A6%2C%22enable_shop_tab_popup%22%3A1%7D&tt_from=copy&u_code=EG36MHIJ2D4GJG&ug_btm=b6880%2Cb6661&unique_id=gentlemans.esntls&user_id=7410291067125302277" className='bg-white rounded-lg p-1 transition-transform duration-300 transform hover:scale-125' target="_blank" rel="noopener noreferrer">
                                        {/* <img src="/path-to-your-tiktok-icon.png" alt="TikTok" className="w-12 h-12"/> */}
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1"/>
                                        {/* <i className="bi bi-tiktok text-white text-5xl"></i> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION 2.1 END */}

                    {/* //? SECTION 3 */}
                    {/* <div className="flex flex-col md:flex-row w-full h-screen">
                        Left Section
                        <div className="flex-1 bg-gray-900 text-white flex flex-col justify-center items-center px-8 relative" data-aos="fade-right">
                            <img
                            src={GEHomeBlack}
                            alt="Black GE"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            />
                            <div className="relative z-10 text-center">
                                <h1 className="primary-font text-3xl md:text-5xl font-bold mt-4">
                                    CONFIDENCE BELOW THE BELT
                                </h1>
                                <p className="secondary-font text-2xl mt-2 text-yellow-500 font-bold">Fresh as new</p>
                                <button className="mt-6 bg-amber-500 text-black py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        Right Section
                        <div className="flex-1 bg-purple-700 text-white flex flex-col justify-center items-center px-8 relative" data-aos="fade-left">
                            <img
                            src={GEHomeWhite}
                            alt="WET GE"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            />
                            <div className="relative z-10 text-center">
                                <h1 className="primary-font text-3xl md:text-5xl font-bold mt-4">
                                    Masculine Wash
                                </h1>
                                <p className="secondary-font text-2xl mt-2 text-yellow-500 font-bold">
                                    CLEANSING AND INVIGORATING
                                </p>
                                <button className="mt-6 bg-amber-500 text-black py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div> */}
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
                <div className=''> 
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
