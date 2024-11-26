import GEHomeBlack from '../../imgs/GEBlack.png'

export default function GEBlack(props) {
  return (
    <div className='GEBW-container shadow-lg'>
      <div className='cover-image-container'>
          <img {...props} src={GEHomeBlack} alt='GEHome-Black' />
          <div className='position-absolute top-50 start-50 translate-middle text-center border text-white p-3'>
              <h3 className='primary-font'>SERVICES</h3>
              <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, iusto.</p>
          </div>
      </div>
    </div>
  )
}
