// import GEMasculineWashHome from '../../../public/imgs/HomeGE.jpg'
// import ProductVideo from '../../../public/imgs/Original/GE presents Masculine Wash (draft).mp4'
import ProdPic from '../../../public/imgs/Original/ProdWrapper.jpg'
import ProdPicTwo from '../../../public/imgs/Original/HomeWrapper2.jpg'
// import GEMasculineWashHome from '../../imgs/GEHome.png'
// import GEMasculineWashHome from '../../imgs/GEHome1.png'


export default function GEHome(props) {
  return (
    <>
    {/* //? SECTION 3 */}
    <div className="relative flex flex-col md:flex-row w-full h-screen bg-black">
      {/* Left Section */}
      <div className="flex-1 bg-gray-900 text-white flex flex-col justify-center items-center relative" data-aos="fade-right">
        <img
          src={ProdPic}
          alt="Black GE"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* MIDDLE PART */}
      <div className="absolute inset-0  w-full flex flex-col justify-center items-center z-10 text-center">
        <div className='w-full lg:w-auto md:w-auto h-80 lg:h-1/2 md:h-1/2 flex flex-col justify-between items-center backdrop-blur-sm bg-black/5 rounded'>
          <h1 className="museum-inline text-yellow-500 text-3xl md:text-6xl font-medium drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
            CLEANSING
          </h1>
          <h1 className="museum-inline text-yellow-500 text-3xl md:text-6xl font-medium drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
            MOISTURIZING
          </h1>
          <h1 className="museum-inline text-yellow-500 text-3xl md:text-6xl font-medium drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
            ELIMINATES ODOR
          </h1>
          <h1 className="museum-inline text-yellow-500 text-3xl md:text-6xl font-medium drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
            ENVIGORATING
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-purple-700 text-white flex flex-col justify-center items-center relative" data-aos="fade-left">
        <img
          src={ProdPicTwo}
          alt="WET GE"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
    </div>
    {/* SECTION 3 END */}
    </>
  )
}
