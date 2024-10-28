import PrimaryLogo from '../../imgs/GE_S FINAL BRANDING (1)-01.png'
import InTextLogo from '../../imgs/GE_S FINAL BRANDING (1)-07.png'
import BootstrapLayout from './BootstrapLayout';

export default function ApplicationLogo({footer = true, ...props}) {
    return (        
        <>
            {footer ? (
                <div>
                    <div className='flex-col justify-center items-center hidden lg:flex'>
                        <img {...props} src={PrimaryLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                        <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                    </div>
                    <div className='flex lg:hidden justify-center items-center'>
                        <img {...props} src={PrimaryLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                        <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                    </div>
                </div>
            ):(
                <BootstrapLayout>
                    <div className='d-flex justify-content-around align-items-center text-center'>
                        <div className='w-auto d-flex justify-content-center align-items-center'>
                            <img {...props} src={PrimaryLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                            <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                        </div>
                    </div>
                </BootstrapLayout>
            )}
        </>
    );
}
