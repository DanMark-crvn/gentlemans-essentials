import WrapperGE from '../../imgs/GEWrapper.png'
import BootstrapLayout from './BootstrapLayout'

export default function GEWrapper({props, selectedPage, pageContent}) {
  return (
    <BootstrapLayout>
        <div
            style={{
            backgroundSize: '',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%', // Adjust as needed
        }}
        className="ge-wrapper d-flex justify-content-center justify-content-md-start justify-content-lg-start align-items-center"
        >
          <img {...props} src={WrapperGE} alt="GE-Wrapper" />
          {/* Add the text here */}
          <div
            className='text-center position-absolute'
          >
            <div key={selectedPage} className="d-flex justify-content-center justify-content-md-center justify-content-lg-end" data-aos="fade-right">
              <div className='text-heading col-md-8 col-lg-8 d-flex flex-column text-center text-md-start text-lg-start'>
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
