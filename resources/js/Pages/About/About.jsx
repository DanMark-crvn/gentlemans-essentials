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
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-8 mb-4 py-10">
          {/* <MasulineWash animated={false}  /> */}
          <div className=''>
            <AboutPicture />
          </div>
          <div className="p-3 px-5 col-lg-4 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font'>Why Choose Us</h1>
            <p className='secondary-font'>At Gentleman's Essential, we understand that personal care is not just about cleanliness—it's about confidence, comfort, and feeling your best, every day. Here's why our masculine wash stands out:</p>
            <ul className="pt-3 list-unstyled">
              <li className='secondary-font'>
                <strong className='primary-font'>Designed for Men:</strong> Gentle, effective cleansing for daily use.
              </li>
              <li className='secondary-font'>
                <strong className='primary-font'>Skin-Friendly Ingredients:</strong> Infused with aloe vera and anti-bacterial properties to soothe, hydrate, and protect.
              </li>
              <li className='secondary-font'>
                <strong className='primary-font'>PH-Balanced:</strong> Maintains the ideal balance for comfort and freshness.
              </li>
              <li className='secondary-font'>
                <strong className='primary-font'>Long-Lasting Freshness:</strong> Keeps you feeling clean and confident all day.
              </li>
            </ul>
            <p className="secondary-font pt-3">
              Experience the ultimate in comfort and care with <strong className='primary-font'>Gentleman's Essential Masculine Wash</strong>.
            </p>
          </div>
        </div>
        <div className='d-flex flex-column pt-4 mt-40'>
          <h1 className='primary-font text-center' data-aos="fade-up" data-aos-duration="2500">Meet Our Team</h1>
          <MeetOurTeam />
        </div>
      </div>
    </>
  )
}
