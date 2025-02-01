import GEHome from '@/Components/GEHome'
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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 my-6 p-10">
          <ProductPicture />
          <div className="px-5 lg:px-0 lg:w-2/5" data-aos="fade-up" data-aos-duration="1500">
            <div className='px-5 lg:px-0 flex flex-col md:text-center lg:text-start'>
              <h1 className='primary-font text-5xl font-semibold pb-2'>Gentleman’s Essentials Masculine Wash</h1>
              <p className='secondary-font py-4 text-pretty text-lg text-justify tracking-wide'>is a gentle cleanser used for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of the area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
              <br />
              <p className='secondary-font text-pretty text-lg text-justify tracking-wide'>Gentleman’s masculine wash is FDA approved and dermatologically tested.</p>
              {/* Add the button here */}
              {/* <Button onClick={handleGetYoursNowClick}  className="bg-[#f5bf03] px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-white secondary-font text-xl">Get Yours Now</Button> */}
              <Button onClick={() => window.open("https://shopee.ph/gentlemans_essentials?entryPoint=ShopBySearch&searchKeyword=gentlemans%20essentials", "_blank")} className="flex justify-center items-center gap-3 bg-[#0a0203] text-white px-4 py-2 rounded mt-4 transition-transform duration-300 transform hover:bg-[#f5bf03] hover:text-black secondary-font text-xl">
                Shopee
                <a href="https://shopee.com" className='bg-orange-500 rounded-sm p-1' target="_blank" rel="noopener noreferrer">
                  {/* <img width="24" height="24" className='filter invert brightness-0 contrast-200' src="https://img.icons8.com/color/48/shopee.png" alt="shopee"/> */}
                  <img width="24" height="24" className='invert' src="https://img.icons8.com/ios-filled/50/shopee.png" alt="shopee"/>
                </a>
              </Button>
              <Button onClick={() => window.open("https://lazada.com", "_blank")} className="flex justify-center items-center gap-3 bg-[#0a0203] text-white px-4 py-2 rounded mt-4 transition-transform duration-300 transform hover:bg-[#f5bf03] hover:text-black secondary-font text-xl">
                Lazada
                <a href="https://lazada.com" className='bg-white rounded-full p-1' target="_blank" rel="noopener noreferrer">
                  <img width="24" height="24" src="https://img.icons8.com/plasticine/100/lazada.png" alt="lazada"/>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <GEHome />
      </div>
    </>
  )
}
