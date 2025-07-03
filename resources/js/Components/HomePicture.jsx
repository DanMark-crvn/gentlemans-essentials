// import HomePic from '../../imgs/About.jpg'
import HomePic from '../../../public/imgs/Original/Artboard 4.png'

export default function HomePicture(props) {
  return (
    <>
      <div className='w-full lg:w-2/3 h-full' data-aos="fade-up" data-aos-duration="1500">
          <img 
              {...props} 
              src={HomePic} 
              alt="Home Picture" 
              className='p-0 object-cover shadow-lg w-full h-full'
          />
      </div>
    </>
  )
}
