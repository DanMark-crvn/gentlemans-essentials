import GEHomeWhite from '../../../public/imgs/GEWhite.jpg'

export default function GEWhite(props) {
  return (
    <div className='GEBW-container shadow-lg'>
      <div className='relative w-full h-full'>
          <img {...props} src={GEHomeWhite} alt="GEHome-White" className="w-full h-full object-cover" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-yellow-500 border border-gray-200 p-3'>
              <h3 className='primary-font'>SERVICES</h3>
              <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, iusto.</p>
          </div>
      </div>
    </div>
  )
}
