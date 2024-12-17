import AboutPic from '../../imgs/Original/GEArt 9.png'
import BootstrapLayout from './BootstrapLayout'

export default function ContactPicture(props) {
  return (
    // <div>Contact</div>
    <BootstrapLayout>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={AboutPic} 
                alt="Contact Picture" 
                className='p-0 object-fit-cover rounded-lg'
                style={{ maxWidth: '550px', height: 'auto' }} 
            />
        </div>
    </BootstrapLayout>
  )
}
