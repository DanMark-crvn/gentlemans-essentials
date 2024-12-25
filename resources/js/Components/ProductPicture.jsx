import ProductPic from '../../imgs/Original/GEArt 4.png'

export default function ProductPicture(props) {
  return (
    // <div>Product</div>
    <>
        <div className='' data-aos="fade-up" data-aos-duration="1500">
            <img 
                {...props} 
                src={ProductPic} 
                alt="Product Picture" 
                className='p-0 object-cover rounded-lg shadow-lg'
                style={{ maxWidth: '450px', height: 'auto' }} 
            />
        </div>
    </>
  )
}
