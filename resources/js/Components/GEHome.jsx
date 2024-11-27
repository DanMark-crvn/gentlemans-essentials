import GEMasculineWashHome from '../../imgs/HomeGE.jpg'
// import GEMasculineWashHome from '../../imgs/GEHome.png'
// import GEMasculineWashHome from '../../imgs/GEHome1.png'


export default function GEHome(props) {
  return (
    // <div>GEHome</div>
    <>
      <div className='d-flex flex-column container justify-content-center align-items-center p-10'>
        <div className='d-flex justify-content-center' data-aos="zoom-in-up" data-aos-duration="3000">
          <img 
            {...props} 
            src={GEMasculineWashHome} 
            alt="Masculine-Wash-Home" 
            className='img-fluid prod-img' 
          />
        </div>
        <div className='p-2'>
          {/* <h2 className='primary-font'>Confidence Below the Belt</h2> */}
          <figure class="text-center">
            <blockquote class="blockquote">
              <p className='primary-font fs-4'>Gentleman’s Essentials Masculine Wash</p>
            </blockquote>
            <figcaption class="blockquote-footer fs-5">
              Confidence Below the Belt
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}
