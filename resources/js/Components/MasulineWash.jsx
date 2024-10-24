import MWFront from '../../imgs/GE Masculine Wash-resize.png'
import BootstrapLayout from './BootstrapLayout'


export default function MasulineWash(props) {
  return (
    <BootstrapLayout>
      <div className='col-lg-4 justify-items-center' data-aos="fade-left" data-aos-duration="3000">
        <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='p-0 animated pulse infinite' style={{ maxWidth: '230px', height: 'auto' }} />
      </div>
    </BootstrapLayout>
  )
}
