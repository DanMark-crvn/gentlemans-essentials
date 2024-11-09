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
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-6 lg:gap-8 mb-4 pt-10 pb-10">
          {/* <MasulineWash animated={false}  /> */}
          <div className=''>
            <AboutPicture />
          </div>
          <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font'>Why Choose Us</h1>
            <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
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
