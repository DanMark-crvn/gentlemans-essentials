import GEHomeWhite from '../../imgs/GEWhite.jpg'

export default function GEWhite(props) {
  return (
    <div className='GEBW-container shadow-lg'>
      <div className='cover-image-container'>
          <img {...props} src={GEHomeWhite} alt="GEHome-White" />
          <div className='position-absolute top-50 start-50 translate-middle text-center text-warning border border-secondary p-3'>
              <h3 className='primary-font'>SERVICES</h3>
              <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, iusto.</p>
          </div>
      </div>
    </div>
  )
}
