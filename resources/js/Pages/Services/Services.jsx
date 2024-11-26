import MasulineWash from '@/Components/MasulineWash'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Services() {
  return (
    // <div>Services</div>
    <>
      <Head title="Services" />
      <div className=''> 
        {/* Home Content Here */} 
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-0 py-10">
          <MasulineWash animated={false}  />
          <div className="p-3 col-lg-5 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font'>Services</h1>
            <p className='secondary-font'>Experience the ultimate in personal care with Gentleman’s Essential Masculine Wash—designed specifically for men. This gentle cleanser is infused with aloe vera and antibacterial properties to keep you feeling fresh, moisturized, and confident all day long. Its carefully balanced formula controls odor and maintains the right pH, ensuring optimal comfort and hygiene. Make it a part of your daily routine for a refreshing, invigorating experience every time.</p>
            {/* <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p> */}
          </div>
        </div>
      </div>
    </>
  )
}
