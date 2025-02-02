import PrimaryLogo from '../../imgs/GE_S FINAL BRANDING (1)-01.png'
import InTextLogo from '../../imgs/GE_S FINAL BRANDING (1)-07.png'
import SubMarkLogo from '../../imgs/GE Sticker.png'

export default function ApplicationLogo({footer = true, ...props}) {
    return (        
        <>
            {footer ? (
                // <div>
                //     <div className='flex-col justify-center items-center hidden lg:flex'>
                //         <img {...props} src={PrimaryLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto', filter: 'invert(1)' }} />
                //         <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '110px', height: 'auto', filter: 'invert(1)' }} />
                //     </div>
                //     <div className='flex lg:hidden justify-center items-center'>
                //         <img {...props} src={PrimaryLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto', filter: 'invert(1)' }} />
                //         <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '110px', height: 'auto', filter: 'invert(1)' }} />
                //     </div>
                // </div>
                <div className='flex justify-around items-center text-center'>
                    <div className='w-auto flex justify-center items-center'>
                        <img {...props} src={SubMarkLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto' }} />
                        <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '180px', height: 'auto', filter: 'invert(1)'}} />
                    </div>
                </div>
            ):(
                <>
                    <div className='flex justify-around items-center text-center'>
                        <div className='w-auto flex justify-center items-center'>
                            {/* <img {...props} src={PrimaryLogo} alt="GE Logo" className="" style={{ maxWidth: '110px', height: 'auto', filter: 'invert(1)' }} /> */}
                            <img {...props} src={InTextLogo} alt="GE-Name" className="" style={{ maxWidth: '200px', height: 'auto', filter: 'invert(1)' }} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
