import ContactPic from '../../../public/imgs/About.jpg'

export default function ContactPicture(props) {
  return (
    // <div>Contact</div>
    <>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={ContactPic} 
                alt="Contact Picture" 
                className='p-0 object-cover rounded-lg max-w-[550px] h-auto'
                // style={{ maxWidth: '550px', height: 'auto' }} 
            />
        </div>
    </>
  )
}
