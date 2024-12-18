// import HomePic from '../../imgs/About.jpg'
import HomePic from '../../imgs/Original/Artboard 4.png'
import BootstrapLayout from './BootstrapLayout'

export default function HomePicture(props) {
  return (
    // <div>AboutPicture</div>
    <BootstrapLayout>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={HomePic} 
                alt="Home Picture" 
                className='p-0 object-fit-cover rounded-lg shadow-lg'
                // style={{ maxWidth: '400px', height: 'auto' }} 
            />
        </div>
    </BootstrapLayout>
  )
}
