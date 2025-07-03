import WETGE from '../../../public/imgs/WETGE.png'

export default function GEWet({props}) {
  return (
    <div 
        className='d-flex ge-wet-container'
        data-aos="fade-down-right"
    >
        {/* Background image for small screens */}
        <div className="ge-wet-background" style={{ backgroundImage: `url(${WETGE})` }} />

        {/* Image for larger screens */}
        <img 
            className="position-relative ge-wet-image" 
            {...props} 
            src={WETGE} 
            alt="WET GE" 
        />
    </div>
  )
}
