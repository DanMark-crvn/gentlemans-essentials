// import HomePicWrapper from '../../imgs/About.jpg'
import HomePicWrapper from '../../imgs/Original/GEArt 2.png'
import HomePicWrapperTwo from '../../imgs/Original/Artboard 3 copy.png'

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
          className="w-full h-full bg-center flex flex-col justify-center items-center"
          style={{
              backgroundImage: `url(${HomePicWrapper})`,
              backgroundSize: 'cover',
          }}
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
