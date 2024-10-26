import MWFront from '../../imgs/GE Masculine Wash-resize.png'
import BootstrapLayout from './BootstrapLayout'
import MWBack from '../../imgs/GE Masculine Wash Back-resize.png'

import React from 'react'

export default function MasculineWashFrontAndBack(props) {
  return (
    <BootstrapLayout>
        <div className='d-flex w-full justify-content-center align-items-center p-1'>
            <div className='col-lg-4 justify-items-center' data-aos="fade-right" data-aos-duration="3000">
                <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='p-0 animate__animated animate__bounce animate__infinite' style={{ maxWidth: '190px', height: 'auto' }} />
            </div>
            <div className='col-lg-4 justify-items-center' data-aos="fade-left" data-aos-duration="3000">
                <img {...props} src={MWBack} alt="Masculine-Wash-Back" className='p-0 animate__animated animate__bounce animate__infinite' style={{ maxWidth: '190px', height: 'auto' }} />
            </div>
        </div>
    </BootstrapLayout>
  )
}
