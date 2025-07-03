// import WrapperGE from '../../imgs/Original/GEArt 1.png'
import ProductImage from '../../../public/imgs/Original/GEArt 6.png';

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
          {/* Dynamically Render Image or Video */}
          {selectedPage === 'Product' && currentPageContent.video ? (
            <video
              src={currentPageContent.video}
              // autoPlay
              loop
              poster={ProductImage}
              // muted
              controls
              className="max-w-full h-auto object-cover"
            />
          ) : (
            <img src={currentPageContent.image} alt={`${selectedPage} - GE Wrapper`} />
          )}
          <div
            className='text-center absolute'
          >
            <div key={selectedPage} className={`flex justify-center md:justify-center ${textContainerjustifyContentClass}`} data-aos="fade-right">
              <div className={`text-heading w-full md:w-8/12 lg:w-8/12 flex flex-col ${textPositionClass}`}>
                {/* <h3 className='primary-font fw-light'>{pageContent[selectedPage].title}</h3> */}

                {/* Home Page: Subtitle and Description as Images */}
                {selectedPage === "Home" ? (
                  <>
                    <img src={currentPageContent.subtitle} alt="Subtitle Logo" className="w-full max-w-xs md:max-w-lg lg:max-w-3xl mx-auto" style={{ filter: 'invert(1)' }} />
                    <img src={currentPageContent.description} alt="Description Logo" className="w-full max-w-xs lg:max-w-2xl mx-auto" />
                  </>
                ) : (
                  <>
                    {/* Subtitle as Text for Other Pages */}
                    <h1 className="primary-font text-5xl lg:!text-7xl text-pretty tracking-wide font-bold pb-2">
                      {currentPageContent.subtitle}
                    </h1>
                    <p className="secondary-font italic text-white">{currentPageContent.description}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
