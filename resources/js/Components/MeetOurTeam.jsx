export default function MeetOurTeam(props) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-4 p-4 sm:p-6 md:p-8" data-aos="zoom-in" data-aos-duration="1500">        
        {/* Row with team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Team Member 1 */}
          <div className="text-center flex flex-col">
            <img
              src="https://via.placeholder.com/400x400"
              alt="SAMER OUSTA"
              className="p-0 object-cover rounded-full w-full h-auto"
            />
            <h4 className="secondary-font mt-3">SAMER OUSTA</h4>
            <p className='secondary-font'>Co-Founder</p>
            <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>

          {/* Team Member 2 */}
          <div className="text-center flex flex-col">
            <img
              src="https://via.placeholder.com/400x400"
              alt="FRANCHESCA OUSTA"
              className="p-0 object-cover rounded-full w-full h-auto"
            />
            <h4 className="secondary-font mt-3">FRANCHESCA OUSTA</h4>
            <p className='secondary-font'>Co-Founder</p>
            <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>
          

          {/* Team Member 3 */}
          <div className="text-center flex flex-col">
            <img
              src="https://via.placeholder.com/400x400"
              alt="XYHLEI EIA MONDRAGON"
              className="p-0 object-cover rounded-full w-full h-auto"
            />
            <h4 className="secondary-font mt-3">XYHLEI EIA MONDRAGON</h4>
            <p className='secondary-font'>Finance Manager</p>
            <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>
          

          {/* Team Member 4 */}
          <div className="text-center flex flex-col">
            <img
              src="https://via.placeholder.com/400x400"
              alt="DALLY MARIE HINANAY"
              className="p-0 object-cover rounded-full w-full h-auto"
            />
            <h4 className="secondary-font mt-3">DALLY MARIE HINANAY</h4>
            <p className='secondary-font'>Designer</p>
            <p className="secondary-font text-sm text-gray-500">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            {/* <a href="#" className="text-primary">Learn More</a> */}
          </div>
        </div>
      </div>
    </>
  );
}
