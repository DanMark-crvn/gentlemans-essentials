import AboutPic from '../../imgs/About.jpg'
import BootstrapLayout from './BootstrapLayout'

export default function AboutPicture(props) {
  return (
    // <div>AboutPicture</div>
    <BootstrapLayout>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={AboutPic} 
                alt="About Picture" 
                className='p-0 object-fit-fill rounded-0 rounded-lg-3'
                style={{ maxWidth: '400px', height: 'auto' }} 
            />
        </div>
    </BootstrapLayout>
  )
}
