import MasulineWash from '@/Components/MasulineWash'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function About() {
  return (
    // <div>About</div>
    <>
      <Head title="About" />
      <div className='border border-primary'> 
        {/* Home Content Here */} 
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-8 mb-4 pt-10 pb-10">
          <MasulineWash animated={false}  />
          <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font'>About</h1>
            <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
            <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
          </div>
        </div>
      </div>
    </>
  )
}
