// import WrapperGE from '../../imgs/Original/GEArt 1.png'

import BootstrapLayout from './BootstrapLayout'

export default function GEWrapper({props, selectedPage, pageContent}) {
  const currentPageContent = pageContent[selectedPage];
  // const content = pageContent[selectedPage];

  // Determine dynamic class for alignment based on the selected page
  const justifyContentClass =
  selectedPage === 'Product' || selectedPage === 'About Us' || selectedPage === 'Services'
    ? 'justify-content-md-end justify-content-lg-end'
    : 'justify-content-md-start justify-content-lg-start';

  const textContainerjustifyContentClass =
  selectedPage === 'Product' || selectedPage === 'About Us' || selectedPage === 'Services'
    ? 'justify-content-lg-center'
    : 'justify-content-lg-end';
  
  const textPositionClass =
  selectedPage === 'Product' || selectedPage === 'About Us' || selectedPage === 'Services'
    ? 'text-md-end text-lg-end'
    : 'text-md-start text-lg-start';

  
  return (
    <BootstrapLayout>
        <div
            style={{
            backgroundSize: '',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%', // Adjust as needed
        }}
        className={`ge-wrapper d-flex justify-content-center ${justifyContentClass} align-items-center`}
        >
          {/*//TODO: THis is for header that have a video {content.image ? (
            <img
              src={content.image}
              alt={`${selectedPage} - GE Wrapper`}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : content.video ? (
            <video
              src={content.video}
              controls
              autoPlay
              loop
              muted
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : null} */}
          
          {/* Dynamically change the image based on the selected page */}
          <img {...props} src={currentPageContent.image} alt={`${selectedPage} - GE Wrapper`} />
          {/* <img {...props} src={WrapperGE} alt="GE-Wrapper" /> */}
          {/* Add the text here */}
          <div
            className='text-center position-absolute'
          >
            <div key={selectedPage} className={`d-flex justify-content-center justify-content-md-center ${textContainerjustifyContentClass}`} data-aos="fade-right">
              <div className={`text-heading col-md-8 col-lg-8 d-flex flex-column text-center ${textPositionClass}`}>
                {/* <h3 className='primary-font fw-light'>{pageContent[selectedPage].title}</h3> */}
                <h1 className='secondary-font'>{pageContent[selectedPage].subtitle}</h1>
                <p className='secondary-font fst-italic text-white'>{pageContent[selectedPage].description}</p>
              </div>
            </div>
          </div>
        </div>
    </BootstrapLayout>
  )
}
