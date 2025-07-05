import ResellerPicture from '@/Components/ResellerPicture'
// import MasulineWash from '@/Components/MasulineWash'
import { Head } from '@inertiajs/react'
import React from 'react'
import ResellerPic from '../../../../public/imgs/Original/ResellerPic.jpg'

export default function Reseller() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // if (form.checkValidity() === false) {
    //   event.stopPropagation();
    // }
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    form.classList.add('was-validated');
    form.submit(); // Manually triggers native POST to Formspree
  };
  return (
    // <div>Reseller</div>
    <>
      <Head title="Reseller" />
      <div className='w-full h-full'>
        {/* Reseller Content Here */}
        <div className='w-full h-[500px] md:h-[600px] lg:h-[900px] max-h-[80%] bg-center flex justify-center items-center'>
          <img src={ResellerPic} alt="Reseller Picture" className='w-full h-full object-cover object-center lg:object-[0_40%] shadow-2xl' />
        </div>  
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 md:gap-16 justify-evenly items-center py-12">
          <ResellerPicture />
          <div className="w-full flex-1" data-aos="fade-up" data-aos-duration="1500">
            {/* <div className='px-10 mx-3 lg:mx-0 flex flex-col items-center lg:items-start'>
              <h1 className='primary-font text-5xl text-pretty text-justify font-semibold pb-2'>Reseller</h1>
              <p className='secondary-font py-4 text-pretty text-lg text-justify tracking-wide'>Experience the ultimate in personal care with Gentleman’s Essential Masculine Wash—designed specifically for men. This gentle cleanser is infused with aloe vera and antibacterial properties to keep you feeling fresh, moisturized, and confident all day long. Its carefully balanced formula controls odor and maintains the right pH, ensuring optimal comfort and hygiene. Make it a part of your daily routine for a refreshing, invigorating experience every time.</p>
            </div> */}
            
            {/* FORM STARTS HERE */}
            <form className="w-full lg:w-[85%] md:w-2/3 mx-auto p-6 bg-white rounded-lg shadow-md space-y-6" method='POST' action={"https://formspree.io/f/xwpbjpgj"} noValidate onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                />
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  Please enter your name.
                </div>
              </div>

              <div className="relative">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text" // Changed from "address" to "text"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  pattern="^[a-zA-ZñÑ0-9\s,.#\-]+$"
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                />
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  {/* Please enter a valid address (letters, numbers, spaces, and , . # - allowed). */}
                  Please enter a valid address
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                />
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  Please enter a valid email address.
                </div>
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10,15}" // Enforces only numbers with a length of 10-15
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                />
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  Please enter a valid phone number (10-15 digits).
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message/Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message or inquiry"
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                  rows="5"
                ></textarea>
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  Please enter a message or inquiry.
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#f5bf03] text-white rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* FORM ENDS HERE */}
          </div>
        </div>
      </div>
    </>
  )
}
