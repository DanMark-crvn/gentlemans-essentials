import GEHomeBlack from '../../imgs/GEBlack.png'

export default function GEBlack(props) {
  return (
    <div className='GEBW-container shadow-lg'>
      <div className='relative w-full h-full'>
          <img {...props} src={GEHomeBlack} alt='GEHome-Black' className="w-full h-full object-cover" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center border text-white p-3'>
              <h3 className='primary-font'>SERVICES</h3>
              <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, iusto.</p>
          </div>
      </div>
    </div>
  )
}
