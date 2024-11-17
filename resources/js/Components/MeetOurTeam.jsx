import BootstrapLayout from './BootstrapLayout';

export default function MeetOurTeam(props) {
  return (
    <BootstrapLayout>
      <div className="container mt-4" data-aos="zoom-in" data-aos-duration="1500">        
        {/* Row with team members */}
        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-md-3 col-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/400x400"
                alt="SAMER OUSTA"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">SAMER OUSTA</h4>
              <p className='secondary-font'>Co-Founder</p>
              <p className="secondary-font small text-muted">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              {/* <a href="#" className="text-primary">Learn More</a> */}
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-3 col-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/400x400"
                alt="FRANCHESCA OUSTA"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">FRANCHESCA OUSTA</h4>
              <p className='secondary-font'>Co-Founder</p>
              <p className="secondary-font small text-muted">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              {/* <a href="#" className="text-primary">Learn More</a> */}
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-3 col-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/400x400"
                alt="XYHLEI EIA MONDRAGON"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">XYHLEI EIA MONDRAGON</h4>
              <p className='secondary-font'>Finance Manager</p>
              <p className="secondary-font small text-muted">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              {/* <a href="#" className="text-primary">Learn More</a> */}
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-md-3 col-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/400x400"
                alt="DALLY MARIE HINANAY"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">DALLY MARIE HINANAY</h4>
              <p className='secondary-font'>Designer</p>
              <p className="secondary-font small text-muted">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </p>
              {/* <a href="#" className="text-primary">Learn More</a> */}
            </div>
          </div>
        </div>
      </div>
    </BootstrapLayout>
  );
}
