// import HomePic from '../../imgs/About.jpg'
import HomePic from '../../imgs/Original/Artboard 4.png'

export default function HomePicture(props) {
  return (
    // <div>AboutPicture</div>
    <>
      <div className='' data-aos="fade-up" data-aos-duration="1500">
          <img 
              {...props} 
              src={HomePic} 
              alt="Home Picture" 
              className='p-0 object-cover rounded-lg shadow-lg lg:max-w-[550px] h-auto'
          />
      </div>
    </>
  )
}
