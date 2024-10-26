import MWFront from '../../imgs/GE Masculine Wash-resize.png'
import BootstrapLayout from './BootstrapLayout'


export default function MasulineWash({animated = true, ...props}) {
  return (
    <BootstrapLayout>
      {animated ? (
        //With Animation
        <div className='col-lg-4 justify-items-center' data-aos="fade-left" data-aos-duration="3000">
          <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='animate__animated animate__pulse animate__infinite p-0' style={{ maxWidth: '230px', height: 'auto' }} />
        </div>
      ) : (
        //Without animation
        <div className='col-lg-4 justify-items-center' data-aos="zoom-in" data-aos-duration="1500">
          <img 
            {...props} 
            src={MWFront} 
            alt="Masculine-Wash-Front" 
            className='p-0 animate__animated animate__tada animate__infinite'  // Removed animation classes here
            style={{ maxWidth: '230px', height: 'auto' }} 
          />
        </div>
      )}
    </BootstrapLayout>
  )
}
