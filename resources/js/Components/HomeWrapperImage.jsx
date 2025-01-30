// import HomePicWrapper from '../../imgs/About.jpg'
import HomePicWrapper from '../../imgs/Original/HomeWrapper1.jpg'
import HomePicWrapperTwo from '../../imgs/Original/HomeWrapper2.jpg'

export default function HomeWrapperImage({homeImageWrapper, ...props}) {
  return (
    // <div>AboutPicture</div>
    <>
        {/* <div
            style={{
            // backgroundImage: `url(${HomePicWrapper})`,
            backgroundSize: '',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%', // Adjust as needed
        }}
        className={`ge-home-wrapper d-flex flex-column justify-content-center align-items-center`}
        >
            <img 
                {...props} 
                src={homeImageWrapper ? HomePicWrapperTwo : HomePicWrapper} 
                alt="Home-Wrapper Picture" 
                className='p-0 object-fit-cover'
            />
        </div> */}
        <div
          className="w-full h-full object-cover bg-center flex flex-col justify-center items-center"
          style={{
              backgroundImage: `url(${HomePicWrapper})`,
              backgroundSize: 'cover',
          }}
          data-aos="fade-up"
        >
          <img 
            {...props} 
            src={homeImageWrapper ? HomePicWrapperTwo : HomePicWrapper} 
            alt="Home-Wrapper Picture" 
            className="p-0 object-cover"
          />
        </div>
    </>
  )
}
