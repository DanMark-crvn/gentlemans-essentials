import GEMasculineWashHome from '../../imgs/HomeGE.jpg'
import ProductVideo from '../../imgs/Original/GE presents Masculine Wash (draft).mp4'
// import GEMasculineWashHome from '../../imgs/GEHome.png'
// import GEMasculineWashHome from '../../imgs/GEHome1.png'


export default function GEHome(props) {
  return (
    // <div>GEHome</div>
    <>
      <div className='flex flex-col justify-center items-center p-10'>
        <div className='flex justify-center' data-aos="zoom-in-up" data-aos-duration="3000">
          <video 
            {...props} 
            src={ProductVideo} 
            poster={GEMasculineWashHome} // Thumbnail image
            alt="Masculine-Wash-Product" 
            controls
            loop
            className='prod-img max-w-full h-auto sm:w-5/5 md:w-4/5 lg:w-2/5 xl:w-2/5 object-cover rounded-lg' 
          />
        </div>
        <div className='p-2'>
          {/* <h2 className='primary-font'>Confidence Below the Belt</h2> */}
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className='primary-font text-4xl lg:text-5xl'>Gentleman’s Essentials Masculine Wash</p>
            </blockquote>
            <figcaption className="blockquote-footer secondary-font border-l-4 pl-4 italic text-gray-700 !text-2xl">
              Confidence Below the Belt
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}
