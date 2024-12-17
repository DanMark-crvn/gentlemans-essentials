import ProductPic from '../../imgs/Original/GEArt 4.png'
import BootstrapLayout from './BootstrapLayout'

export default function ProductPicture(props) {
  return (
    // <div>Product</div>
    <BootstrapLayout>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={ProductPic} 
                alt="Product Picture" 
                className='p-0 object-fit-cover rounded-lg shadow-lg'
                style={{ maxWidth: '450px', height: 'auto' }} 
            />
        </div>
    </BootstrapLayout>
  )
}
