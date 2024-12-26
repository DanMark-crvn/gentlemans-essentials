import MWFront from '../../imgs/GE Masculine Wash-resize.png'

export default function MasulineWash({animated = true, loading = false, ...props}) {
  return (
    <>
      {/* {animated ? (
        //With Animation
        <div className='col-lg-4 justify-items-center' data-aos="fade-left" data-aos-duration="3000">
          <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='animate__animated animate__pulse animate__infinite p-0' style={{ maxWidth: '230px', height: 'auto' }} />
        </div>
      ) : (
        //Without animation
        <div className='col-lg-4 justify-items-center' data-aos="zoom-in" data-aos-duration="1500">
          <img 
            {...props} 
            src={MWFront} 
            alt="Masculine-Wash-Front" 
            className='p-0 animate__animated animate__tada animate__infinite'  // Removed animation classes here
            style={{ maxWidth: '230px', height: 'auto' }} 
          />
        </div>
      )} */}
      
      {/* Loader image */}
      {loading ? (
        <div className='justify-items-center'>
          <img 
            {...props} 
            src={MWFront} 
            alt="Loading-Masculine-Wash" 
            className='loader-image animate__animated animate__flash animate__infinite'
            style={{ maxWidth: '70px', height: 'auto' }} 
          />
        </div>
      ):(
        // Check for animated prop and render accordingly
        animated ? (
          //Animation
          <div className='lg:w-1/3 justify-items-center' data-aos="fade-left" data-aos-duration="3000">
            <img {...props} src={MWFront} alt="Masculine-Wash-Front" className='animate__animated animate__pulse animate__infinite p-0 w-2/3 md:w-2/3 lg:w-1/3' style={{ maxWidth: '230px', height: 'auto' }} />
          </div>
        ) : (
          //With animation
          <div className='lg:w-1/3 justify-items-center' data-aos="zoom-in" data-aos-duration="1500">
            <img 
              {...props} 
              src={MWFront} 
              alt="Masculine-Wash-Front" 
              className='p-0 animate__animated animate__tada animate__infinite w-2/3 md:w-2/3 lg:w-1/3'  // Removed animation classes here
              style={{ maxWidth: '230px', height: 'auto' }} 
            />
          </div>
        )
      )}
    </>
  )
}
