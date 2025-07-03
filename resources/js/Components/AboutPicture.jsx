// import AboutPic from '../../imgs/About.jpg'
import AboutPic from '../../../public/imgs/Original/Artboard 4 copy 2.png'

export default function AboutPicture(props) {
  return (
    // <div>AboutPicture</div>
    <>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={AboutPic} 
                alt="About Picture" 
                className='p-0 object-cover rounded-none lg:rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 max-w-[400px] h-auto'
                // style={{ maxWidth: '400px', height: 'auto' }} 
            />
        </div>
    </>
  )
}
