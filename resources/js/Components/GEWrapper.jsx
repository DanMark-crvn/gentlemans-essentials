import WrapperGE from '../../imgs/GEWrapper.png'
import BootstrapLayout from './BootstrapLayout'

export default function GEWrapper({children}) {
  return (
    <BootstrapLayout>
        <div
            style={{
            backgroundImage: `url(${WrapperGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%', // Adjust as needed
        }}
        className="d-flex align-items-center justify-content-center container-fluid pt-96"
        >
            {/* <img {...props} src={WrapperGE} alt="GE-Wrapper" /> */}
            {children}
        </div>
    </BootstrapLayout>
  )
}
