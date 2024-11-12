import GEMasculineWashHome from '../../imgs/HomeGE.jpg'
import BootstrapLayout from './BootstrapLayout'

export default function GEHome(props) {
  return (
    // <div>GEHome</div>
    <BootstrapLayout>
        <div className='d-flex container justify-content-center align-items-center p-3'>
            <div className='' data-aos="zoom-in-up" data-aos-duration="3000">
                <img 
                    {...props} 
                    src={GEMasculineWashHome} 
                    alt="Masculine-Wash-Home" 
                    className='p-0 object-fit-fill border rounded-5' 
                    style={{ maxWidth: '600px', height: 'auto' }} />
            </div>
        </div>
    </BootstrapLayout>
  )
}
