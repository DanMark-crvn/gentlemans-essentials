import PrimaryLogo from '../../imgs/GE_S FINAL BRANDING (1)-01.png'
import InTextLogo from '../../imgs/GE_S FINAL BRANDING (1)-07.png'

export default function ApplicationLogo(props) {
    return (        
        <>
            <div className='flex-col justify-center items-center hidden lg:flex'>
                <img {...props} src={PrimaryLogo} alt="GE Logo" className="border" style={{ maxWidth: '110px', height: 'auto' }} />
                <img {...props} src={InTextLogo} alt="GE-Name" className="border" style={{ maxWidth: '110px', height: 'auto' }} />
            </div>
            <div className='flex lg:hidden justify-center items-center'>
                <img {...props} src={PrimaryLogo} alt="GE Logo" className="border" style={{ maxWidth: '110px', height: 'auto' }} />
                <img {...props} src={InTextLogo} alt="GE-Name" className="border" style={{ maxWidth: '110px', height: 'auto' }} />
            </div>
        </>
    );
}
