import BootstrapLayout from './BootstrapLayout'
import MWGold from '../../imgs/MASCULINE WASH.png'
import React from 'react'

export default function MasculineWashGold(props) {
  return (
    // <div>MasculineWashGold</div>
    <BootstrapLayout>
        <div className='container justify-items-center z-1' data-aos="fade-up" data-aos-duration="3000">
            <img {...props} src={MWGold} alt="Masculine-Wash-Gold" className='mwGold' />
        </div>
    </BootstrapLayout>
  )
}
