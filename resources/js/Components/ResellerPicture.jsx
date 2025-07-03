import ResellerPic from '../../../public/imgs/Original/GEArt 9.png'

export default function ResellerPicture(props) {
  return (
    // <div>Reseller</div>
    <>
        <div className='w-full flex-1 flex justify-center' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={ResellerPic} 
                alt="Reseller Picture" 
                className='p-0 object-cover rounded max-w-full md:max-w-[620px] lg:max-w-[750px] h-auto'
                // style={{ maxWidth: '550px', height: 'auto' }} 
            />
        </div>
    </>
  )
}
