// import WrapperGE from '../../imgs/Original/GEArt 1.png'

export default function GEWrapper({props, selectedPage, pageContent}) {
  const currentPageContent = pageContent[selectedPage];
  // const content = pageContent[selectedPage];

  // Determine dynamic class for alignment based on the selected page
  const justifyContentClass =
  selectedPage === 'Product' || selectedPage === 'About Us' || selectedPage === 'Reseller'
    ? 'md:justify-end lg:justify-end'
    : 'md:justify-start lg:justify-start';

  const textContainerjustifyContentClass =
  selectedPage === 'Product' || selectedPage === 'About Us' || selectedPage === 'Reseller'
    ? 'lg:justify-center'
    : 'lg:justify-end';
  
  const textPositionClass =
  selectedPage === 'Product' || selectedPage === 'About Us' || selectedPage === 'Reseller'
    ? 'md:text-end lg:text-end'
    : 'md:text-start lg:text-start';

  
  return (
    <>
        <div
            style={{
            backgroundSize: '',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%', // Adjust as needed
        }}
        className={`ge-wrapper flex justify-center ${justifyContentClass} items-center`}
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
            className='text-center absolute'
          >
            <div key={selectedPage} className={`flex justify-center md:justify-center ${textContainerjustifyContentClass}`} data-aos="fade-right">
              <div className={`text-heading w-full md:w-8/12 lg:w-8/12 flex flex-col ${textPositionClass}`}>
                {/* <h3 className='primary-font fw-light'>{pageContent[selectedPage].title}</h3> */}
                <h1 className='secondary-font text-4xl font-medium pb-2'>{pageContent[selectedPage].subtitle}</h1>
                <p className='secondary-font italic text-white'>{pageContent[selectedPage].description}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
