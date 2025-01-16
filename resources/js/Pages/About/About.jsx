import MasulineWash from '@/Components/MasulineWash'
import { Head } from '@inertiajs/react'
import React from 'react'
import AboutPicture from '@/Components/AboutPicture'
import MeetOurTeam from '@/Components/MeetOurTeam'

export default function About() {
  return (
    // <div>About</div>
    <>
      <Head title="About" />
      <div className='pb-20'> 
        {/* Home Content Here */} 
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mb-4 py-10">
          {/* <MasulineWash animated={false}  /> */}
          <div className=''>
            <AboutPicture />
          </div>
          <div className="p-3 px-5 lg:w-1/3 flex flex-col md:text-center lg:text-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='primary-font text-6xl font-semibold pb-2'>Why Choose Us</h1>
            <p className='secondary-font py-4 text-pretty text-lg text-justify tracking-wide'>At Gentleman's Essential, we understand that personal care is not just about cleanliness—it's about confidence, comfort, and feeling your best, every day. Here's why our masculine wash stands out:</p>
            <ul className="pt-3 list-unstyled">
              <li className='secondary-font text-pretty text-lg text-justify tracking-normal'>
                <strong className='secondary-font'>Designed for Men:</strong> Gentle, effective cleansing for daily use.
              </li>
              <li className='secondary-font text-pretty text-lg text-justify tracking-normal'>
                <strong className='secondary-font'>Skin-Friendly Ingredients:</strong> Infused with aloe vera and anti-bacterial properties to soothe, hydrate, and protect.
              </li>
              <li className='secondary-font text-pretty text-lg text-justify tracking-normal'>
                <strong className='secondary-font'>PH-Balanced:</strong> Maintains the ideal balance for comfort and freshness.
              </li>
              <li className='secondary-font text-pretty text-lg text-justify tracking-normal'>
                <strong className='secondary-font'>Long-Lasting Freshness:</strong> Keeps you feeling clean and confident all day.
              </li>
            </ul>
            <p className="secondary-font text-lg text-pretty text-justify pt-3">
              Experience the ultimate in comfort and care with <strong className='primary-font text-lg'>Gentlemans Essential Masculine Wash</strong>.
            </p>
          </div>
        </div>
        <div className='flex flex-col pt-4 mt-40'>
          <h1 className='primary-font text-6xl text-center font-medium' data-aos="fade-up" data-aos-duration="2500">Meet Our Team</h1>
          <MeetOurTeam />
        </div>
      </div>
    </>
  )
}
