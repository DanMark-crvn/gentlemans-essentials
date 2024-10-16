import PrimaryLogo from '../../imgs/GE_S FINAL BRANDING (1)-01.png'
import InTextLogo from '../../imgs/GE_S FINAL BRANDING (1)-07.png'

export default function ApplicationLogo(props) {
    return (        
        <>
            <div className='flex-col justify-center items-center hidden lg:flex'>
                <img {...props} src={PrimaryLogo} alt="GE Logo" className="w-1/3 block" />
                <img {...props} src={InTextLogo} alt="GE-Name" className="w-2/5 block" />
            </div>
            <div className='flex lg:hidden justify-center items-center'>
                <img {...props} src={PrimaryLogo} alt="GE Logo" className="w-1/3 block" />
                <img {...props} src={InTextLogo} alt="GE-Name" className="w-3/4 block" />
            </div>
        </>
    );
}
