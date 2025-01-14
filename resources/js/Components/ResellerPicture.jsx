import ResellerPic from '../../imgs/Original/GEArt 9.png'

export default function ResellerPicture(props) {
  return (
    // <div>Reseller</div>
    <>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={ResellerPic} 
                alt="Reseller Picture" 
                className='p-0 object-cover rounded-lg max-w-[550px] h-auto'
                // style={{ maxWidth: '550px', height: 'auto' }} 
            />
        </div>
    </>
  )
}
