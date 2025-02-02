import MasulineWash from '@/Components/MasulineWash'
import { Head } from '@inertiajs/react'
import React from 'react'
import AboutPicture from '@/Components/AboutPicture'
import AboutPic from '../../../imgs/Original/AboutPicture.jpg'
import MeetOurTeam from '@/Components/MeetOurTeam'
import InTextLogo from '../../../imgs/GE_S FINAL BRANDING (1)-07.png'

export default function About() {
  return (
    // <div>About</div>
    <>
      <Head title="About" />
      <div className=''> 
        {/* About Content Here */} 
        {/* //? SECTION 1 */}
        <div className='w-full h-full lg:max-h-[900px] md:max-h-[1200px] flex justify-center bg-black'>
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className='w-full h-full lg:w-3/4 lg:h-full md:h-[63%]'> 
              <div className='w-full h-full lg:w-[90%]' data-aos="fade-up" data-aos-duration="1500">
                <img 
                  src={AboutPic} 
                  alt="Home Picture" 
                  className='p-0 object-cover object-top lg:object-top md:object-[50%_40%] shadow-lg w-full h-full'
                />
              </div>
            </div>
            <div className="h-auto lg:h-3/4 p-3 lg:p-16 w-full lg:w-4/5 md:w-4/5 flex flex-col justify-around items-center lg:items-end text-center lg:text-start" data-aos="fade-up" data-aos-duration="1500">
              <div className='px-0 lg:px-5'>
                <p className='secondary-font py-4 text-pretty text-xl lg:text-2xl text-justify tracking-wide text-white'>We are a brand that aims to introduce premium men’s hygiene in the market and every filipino household.</p>
                <p className='secondary-font py-4 text-pretty text-xl lg:text-2xl text-justify tracking-wide text-white'>
                  Historically, the topic of hygiene for men has been given less attention compared to women’s 
                  hygiene possibly tied with traditional gender stereotypes and societal standards. However, now in the 21st Century, 
                  this norm is changing as men begin in prioritizing grooming and skincare practices as well and the world would not judge them for it.
                </p>
                <p className='secondary-font py-4 text-pretty text-xl lg:text-2xl font-semibold text-justify tracking-wide text-white'>
                  Gentleman’s Essentials will be a vessel to bring Filipinos a step closer to the evolutionary movement of personal care.
                </p>
              </div>
              <div className='flex flex-col gap-3 px-0 lg:px-5'>
                <img src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '110px', height: 'auto', filter: 'invert(1)' }} />
                <p className='secondary-font text-xs text-center lg:text-end text-white'>EST.2024</p>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 1 END */}
        <div className='flex flex-col justify-center items-center py-12 lg:py-24'>
          <h1 className='primary-font text-6xl text-center font-medium' data-aos="fade-up" data-aos-duration="2500">Meet The Team</h1>
          <MeetOurTeam />
        </div>
      </div>
    </>
  )
}
