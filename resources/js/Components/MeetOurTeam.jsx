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
                alt="Lawson Arnold"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">Lawson Arnold</h4>
              <p className='secondary-font'>CEO, Founder, Atty.</p>
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
                alt="Jeremy Walker"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">Jeremy Walker</h4>
              <p className='secondary-font'>CEO, Founder, Atty.</p>
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
                alt="Patrik White"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">Patrik White</h4>
              <p className='secondary-font'>CEO, Founder, Atty.</p>
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
                alt="Kathryn Ryan"
                className="p-0 object-fit-fill border rounded-circle img-fluid"
              />
              <h4 className="secondary-font mt-3">Kathryn Ryan</h4>
              <p className='secondary-font'>CEO, Founder, Atty.</p>
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
