import GEHome from '@/Components/GEHome'
import MasculineWashFrontAndBack from '@/Components/MasculineWashFrontAndBack'
import MasulineWash from '@/Components/MasulineWash'
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
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-0 mb-4 p-10">
          {/* <MasulineWash animated={false}  /> */}
          <MasculineWashFrontAndBack />
          <div className="p-3 col-lg-5 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font'>Gentleman’s Essentials Masculine Wash</h1>
            <p className='secondary-font'>is a gentle cleanser used for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of the area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
            <p className='secondary-font'>Gentleman’s masculine wash is FDA approved and dermatologically tested.</p>
            {/* Add the button here */}
            <Button onClick={handleGetYoursNowClick}  className="btn btn-warning mt-4">Get Yours Now</Button>
          </div>
        </div>
        <GEHome />
      </div>
    </>
  )
}
