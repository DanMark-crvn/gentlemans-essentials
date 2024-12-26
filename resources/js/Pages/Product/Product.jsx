import GEHome from '@/Components/GEHome'
import MasculineWashFrontAndBack from '@/Components/MasculineWashFrontAndBack'
import MasulineWash from '@/Components/MasulineWash'
import ProductPicture from '@/Components/ProductPicture'
import { Button } from '@headlessui/react'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Product({ setActivePage }) {
  // Handle the "Get Yours Now" click
  const handleGetYoursNowClick = () => {
    // Change the active page to "Contact Us"
    setActivePage('Contact Us');
  };
  return (
    <>
      <Head title="Product" />
      <div className=''> 
        {/* Product Content Here */} 
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mb-4 p-10">
          {/* <MasulineWash animated={false}  /> */}
          {/* <MasculineWashFrontAndBack /> */}
          <ProductPicture />
          <div className="p-3 lg:w-5/12 flex flex-col md:text-center lg:text-left" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font text-4xl font-medium pb-2'>Gentleman’s Essentials Masculine Wash</h1>
            <p className='secondary-font'>is a gentle cleanser used for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of the area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
            <br />
            <p className='secondary-font'>Gentleman’s masculine wash is FDA approved and dermatologically tested.</p>
            {/* Add the button here */}
            <Button onClick={handleGetYoursNowClick}  className="bg-[#f5bf03] px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-white">Get Yours Now</Button>
          </div>
        </div>
        <GEHome />
      </div>
    </>
  )
}
