import Samer from '../../imgs/Original/Team/Samer.jpg'
import Franchesca from '../../imgs/Original/Team/Franchesca.jpg'
import XYHLEI from '../../imgs/Original/Team/XYHLEI.jpg'
import Dally from '../../imgs/Original/Team/Dally.png'

export default function MeetOurTeam(props) {
  return (
    <>
      <div 
        className="max-w-full mx-auto mt-4 p-4 sm:p-6 md:p-8" 
        // data-aos="zoom-in" data-aos-duration="1500"
      >        
        {/* Row with team members */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 md:gap-20">
          {/* Team Member 1 */}
          <div className="text-center flex flex-col">
            <div className='rounded-full border-[10px] border-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_0_15px_rgba(191,149,63,0.7)] overflow-hidden'>
              <img
                src={Samer}
                alt="SAMER OUSTA"
                className="p-0 object-cover object-top rounded-full w-[300px] h-[300px]"
              />
            </div>
            <h4 className="secondary-font mt-3">SAMER OUSTA</h4>
            <p className='secondary-font italic'>Co-Founder</p>
            {/* <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p> */}
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>

          {/* Team Member 2 */}
          <div className="text-center flex flex-col">
            <div className='rounded-full border-[10px] border-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_0_15px_rgba(191,149,63,0.7)] overflow-hidden'>
              <img
                src={Franchesca}
                alt="FRANCHESCA OUSTA"
                className="p-0 object-cover object-[10px_0] scale-125 rounded-full w-[300px] h-[300px]"
              />
            </div>
            <h4 className="secondary-font mt-3">FRANCHESCA OUSTA</h4>
            <p className='secondary-font italic'>Co-Founder</p>
            {/* <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p> */}
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>
          

          {/* Team Member 3 */}
          <div className="text-center flex flex-col">
            <div className='rounded-full border-[10px] border-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_0_15px_rgba(191,149,63,0.7)] overflow-hidden'>
              <img
                src={XYHLEI}
                alt="XYHLEI EIA MONDRAGON"
                className="p-0 object-cover object-[7px_0px] scale-105 rounded-full w-[300px] h-[300px]"
              />
            </div>
            <h4 className="secondary-font mt-3">XYHLEI EIA MONDRAGON</h4>
            <p className='secondary-font italic'>Finance Manager</p>
            {/* <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p> */}
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>
          

          {/* Team Member 4 */}
          <div className="text-center flex flex-col">
            <div className='rounded-full border-[10px] border-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_0_15px_rgba(191,149,63,0.7)] overflow-hidden'>
              <img
                src={Dally}
                alt="DALLY MARIE HINANAY"
                className="p-0 object-cover object-[0_20px] scale-[160%] rounded-full w-[300px] h-[300px]"
              />
            </div>
            <h4 className="secondary-font mt-3">DALLY MARIE HINANAY</h4>
            <p className='secondary-font italic'>Designer</p>
            {/* <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p> */}
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
