import GEHome from '@/Components/GEHome'
import MasulineWash from '@/Components/MasulineWash'
import ProductPicture from '@/Components/ProductPicture'
import { Button } from '@headlessui/react'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Product({ setActivePage }) {
  // Handle the "Get Yours Now" click
  const handleGetYoursNowClick = () => {
    // Change the active page to "Contact Us"
    setActivePage('Contact Us');
  };
  return (
    <>
      <Head title="Product" />
      <div className=''> 
        {/* Product Content Here */} 
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 my-6 p-10">
          <ProductPicture />
          <div className="px-5 lg:px-0 lg:w-2/5" data-aos="fade-up" data-aos-duration="1500">
            <div className='px-5 lg:px-0 flex flex-col md:text-center lg:text-start'>
              <h1 className='primary-font text-5xl font-semibold pb-2'>Gentleman’s Essentials Masculine Wash</h1>
              <p className='secondary-font py-4 text-pretty text-lg text-justify tracking-wide'>is a gentle cleanser used for men’s private parts. Infused with aloe vera and anti-bacterial properties that controls odor, moisturizes, and maintains the right pH balanced of the area for long periods of time. For attaining the best men’s intimate grooming use daily on your private parts to have a refreshing and invigorating feeling throughout the day.</p>
              <br />
              <p className='secondary-font text-pretty text-lg text-justify tracking-wide'>Gentleman’s masculine wash is FDA approved and dermatologically tested.</p>
              {/* Add the button here */}
              {/* <Button onClick={handleGetYoursNowClick}  className="bg-[#f5bf03] px-4 py-2 rounded mt-4 hover:bg-yellow-500 hover:text-white secondary-font text-xl">Get Yours Now</Button> */}
              <Button onClick={() => window.open("https://shopee.ph/gentlemans_essentials?entryPoint=ShopBySearch&searchKeyword=gentlemans%20essentials", "_blank")} className="flex justify-center items-center gap-3 bg-[#0a0203] text-white px-4 py-2 rounded mt-4 transition-transform duration-300 transform hover:bg-[#f5bf03] hover:text-black secondary-font text-xl">
                Shopee
                <a href="https://shopee.ph/Gentleman's-Essentials-Masculine-Wash-(150ml)-i.1338092442.27558862443" className='bg-orange-500 rounded-sm p-1' target="_blank" rel="noopener noreferrer">
                  {/* <img width="24" height="24" className='filter invert brightness-0 contrast-200' src="https://img.icons8.com/color/48/shopee.png" alt="shopee"/> */}
                  <img width="24" height="24" className='invert' src="https://img.icons8.com/ios-filled/50/shopee.png" alt="shopee"/>
                </a>
              </Button>
              <Button onClick={() => window.open("https://www.tiktok.com/view/product/1730838579313347519?checksum=eb38a16f7111ec63a3d408009d97e6056ad1df667e6ac95a882ddbb874be8525&og_info=%7B%22title%22%3A%22Gentleman%E2%80%99s+Masculine+Wash+Premium+Invigorating+Men%27s+Grooming+Skin+Care+Essentials%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-va.ibyteimg.com%5C%2Ftos-maliva-i-o3syd03w52-us%5C%2F69843244a6994f8d8e76b3b03194327f~tplv-o3syd03w52-resize-webp%3A260%3A260.webp%3Ffrom%3D1826719393%22%7D&sec_user_id=MS4wLjABAAAA3HHLFggAwawdZdHD_TP7bsrMqZdXyrQ_ApXv6gFUdZJ447GAtaUHshbWxmpC6iVS&share_app_id=1180&share_link_id=E1AA76E3-B471-46E2-B56B-001F77C7C9A1&social_share_type=15&timestamp=1732860484&trackParams=%7B%22traffic_source_list%22%3A%5B6%5D%2C%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%2C%22traffic_source%22%3A6%2C%22enable_shop_tab_popup%22%3A1%7D&tt_from=copy&u_code=EG36MHIJ2D4GJG&ug_btm=b6880%2Cb6661&unique_id=gentlemans.esntls&user_id=7410291067125302277", "_blank")} className="flex justify-center items-center gap-3 bg-[#0a0203] text-white px-4 py-2 rounded mt-4 transition-transform duration-300 transform hover:bg-[#f5bf03] hover:text-black secondary-font text-xl">
                Tiktok
                <a href="https://www.tiktok.com/view/product/1730838579313347519?checksum=eb38a16f7111ec63a3d408009d97e6056ad1df667e6ac95a882ddbb874be8525&og_info=%7B%22title%22%3A%22Gentleman%E2%80%99s+Masculine+Wash+Premium+Invigorating+Men%27s+Grooming+Skin+Care+Essentials%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-va.ibyteimg.com%5C%2Ftos-maliva-i-o3syd03w52-us%5C%2F69843244a6994f8d8e76b3b03194327f~tplv-o3syd03w52-resize-webp%3A260%3A260.webp%3Ffrom%3D1826719393%22%7D&sec_user_id=MS4wLjABAAAA3HHLFggAwawdZdHD_TP7bsrMqZdXyrQ_ApXv6gFUdZJ447GAtaUHshbWxmpC6iVS&share_app_id=1180&share_link_id=E1AA76E3-B471-46E2-B56B-001F77C7C9A1&social_share_type=15&timestamp=1732860484&trackParams=%7B%22traffic_source_list%22%3A%5B6%5D%2C%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%2C%22traffic_source%22%3A6%2C%22enable_shop_tab_popup%22%3A1%7D&tt_from=copy&u_code=EG36MHIJ2D4GJG&ug_btm=b6880%2Cb6661&unique_id=gentlemans.esntls&user_id=7410291067125302277" className='bg-white rounded-full p-1' target="_blank" rel="noopener noreferrer">
                  {/* <img width="24" height="24" src="https://img.icons8.com/plasticine/100/lazada.png" alt="lazada"/> */}
                  <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="lazada"/>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <GEHome />
      </div>
    </>
  )
}
