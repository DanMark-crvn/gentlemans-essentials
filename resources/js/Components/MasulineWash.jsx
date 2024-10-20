import MWFront from '../../imgs/GE Masculine Wash-resize.png'
import BootstrapLayout from './BootstrapLayout'


export default function MasulineWash(props) {
  return (
    <BootstrapLayout>
      <div className='col-lg-4 justify-items-center'>
        <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='p-0' style={{ maxWidth: '250px', height: 'auto' }} />
      </div>
    </BootstrapLayout>
  )
}
