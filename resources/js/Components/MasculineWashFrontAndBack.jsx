import MWFront from '../../imgs/GE Masculine Wash-resize.png'
import BootstrapLayout from './BootstrapLayout'
import MWBack from '../../imgs/GE Masculine Wash Back-resize.png'

import React from 'react'

export default function MasculineWashFrontAndBack(props) {
  return (
    <BootstrapLayout>
        <div className='d-flex w-full justify-content-center align-items-center p-1 transition-transform duration-3000 transform hover:scale-105'>
            <div className='col-lg-4 justify-items-center' data-aos="zoom-in-up" data-aos-duration="3000">
                <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='p-0' style={{ maxWidth: '190px', height: 'auto' }} />
            </div>
            <div className='col-lg-4 justify-items-center z-2' data-aos="zoom-in-up" data-aos-duration="3000">
                <img {...props} src={MWBack} alt="Masculine-Wash-Back" className='p-0' style={{ maxWidth: '190px', height: 'auto' }} />
            </div>
        </div>
    </BootstrapLayout>
  )
}
