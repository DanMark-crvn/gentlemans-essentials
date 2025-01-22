import { Head } from '@inertiajs/react'
import MasulineWash from '@/Components/MasulineWash';
import React from 'react'
import ContactPicture from '@/Components/ContactPicture';

// Contact.jsx
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    
    form.classList.add('was-validated');
  };
  return (
    <>
      <Head title="Contact" />
      <div className='' id='contact'> 
        {/* Home Content Here */} 
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mb-4 py-10">
          {/* <MasulineWash animated={false}  /> */}
          <ContactPicture />
          <div className="p-3 md:w-9/12 lg:w-5/12 flex flex-col text-left" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='primary-font text-5xl font-semibold pb-3 px-3'>Contact</h1>
            <p className='secondary-font text-pretty text-lg text-justify tracking-wide py-2 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
            <p className='secondary-font text-pretty text-lg text-justify tracking-wide py-2  px-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
            <div className='mb-3'>
              <div className="flex items-center p-2">
                <i className="bi bi-geo-alt contactIcon flex items-center text-2xl p-3"></i>
                <div className="ms-3">
                  <p className="mb-0 fs-6">E1 Scandia Suites, Silang, Cavite</p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <i className="bi bi-envelope contactIcon flex items-center text-2xl p-3"></i>
                <div className="ms-3">
                  <p className="mb-0 fs-6">gentlemansessentialsofficial@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center p-2">
                <i className="bi bi-telephone contactIcon flex items-center text-2xl p-3"></i>
                <div className="ms-3">
                  <p className="mb-0 fs-6">+639 54 386 4923</p>
                </div>
              </div>
            </div>

            {/* <form className='needs-validation' novalidate onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="validationCustom01" placeholder="Full Name" required/>
                <label htmlFor="validationCustom01">Full Name</label>
                <div className="valid-feedback">
                  Looks good!
                </div>
                <div className="invalid-feedback">
                  Please enter your full name.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="validationEmail" placeholder="name@example.com" required />
                <label htmlFor="validationEmail">Email address</label>
                <div className="invalid-feedback">
                  Please enter an email.
                </div>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="validationTextarea" style={{ height: '100px' }} required></textarea>
                <label htmlFor="validationTextarea">Comments</label>
                <div className="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
              <div>
                <button className="btn btn-warning" type="submit">Submit</button>
              </div>
            </form> */}
            <form className="w-full mx-auto p-6 bg-white rounded-lg shadow-md space-y-6" noValidate onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                />
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  Please enter your full name.
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
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment/Inquiry</label>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Write your comment or inquiry"
                  required
                  className="peer w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f5bf03] focus:border-[#f5bf03]"
                  rows="5"
                ></textarea>
                <div className="text-sm text-red-500 peer-invalid:block hidden">
                  Please enter a comment or inquiry.
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
          </div>
        </div>
      </div>
    </>
  )
}
