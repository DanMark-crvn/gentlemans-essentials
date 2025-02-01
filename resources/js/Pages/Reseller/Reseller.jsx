import ResellerPicture from '@/Components/ResellerPicture'
import MasulineWash from '@/Components/MasulineWash'
import { Head } from '@inertiajs/react'
import React from 'react'
import ResellerPic from '../../../imgs/Original/ResellerPic.jpg'

export default function Reseller() {
  return (
    // <div>Reseller</div>
    <>
      <Head title="Reseller" />
      <div className='w-full h-full border border-yellow-500'>
        {/* Reseller Content Here */}
        {/* <div className='border h-full flex justify-center items-center'>
          <img src={ResellerPic} alt="Reseller Picture" className='w-1/2 object-cover' />
        </div>   */}
        <div className="h-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 border border-black">
          <ResellerPicture />
          <div className="p-3 px-10 lg:px-0 lg:w-2/5" data-aos="fade-up" data-aos-duration="1500">
            <div className='px-10 mx-3 lg:mx-0 flex flex-col items-center lg:items-start'>
              <h1 className='primary-font text-5xl text-pretty text-justify font-semibold pb-2'>Reseller</h1>
              <p className='secondary-font py-4 text-pretty text-lg text-justify tracking-wide'>Experience the ultimate in personal care with Gentleman’s Essential Masculine Wash—designed specifically for men. This gentle cleanser is infused with aloe vera and antibacterial properties to keep you feeling fresh, moisturized, and confident all day long. Its carefully balanced formula controls odor and maintains the right pH, ensuring optimal comfort and hygiene. Make it a part of your daily routine for a refreshing, invigorating experience every time.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
