// import HomePicWrapper from '../../imgs/About.jpg'
import HomePicWrapper from '../../imgs/Original/HomeWrapper1.jpg'
import HomePicWrapperTwo from '../../imgs/Original/HomeWrapper2.jpg'

export default function HomeWrapperImage({homeImageWrapper, ...props}) {
  return (
    <>
        <div
          className="w-full h-[500px] md:h-[600px] lg:h-[900px] max-h-[80%] bg-center flex flex-col justify-center items-center"
          style={{
              backgroundImage: `url(${HomePicWrapper})`,
              backgroundSize: 'cover',
              backgroundPosition: "center",
          }}
          data-aos="fade-up"
        >
          <img 
            {...props} 
            src={homeImageWrapper ? HomePicWrapperTwo : HomePicWrapper} 
            alt="Home-Wrapper Picture" 
            className="w-full h-full object-cover"
          />
        </div>
    </>
  )
}
