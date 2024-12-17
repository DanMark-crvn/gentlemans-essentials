// import AboutPic from '../../imgs/About.jpg'
import AboutPic from '../../imgs/Original/Artboard 4 copy 2.png'
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
                className='p-0 object-fit-cover rounded-0 rounded-lg-3 transition-transform duration-300 ease-in-out hover:scale-105'
                style={{ maxWidth: '400px', height: 'auto' }} 
            />
        </div>
    </BootstrapLayout>
  )
}
