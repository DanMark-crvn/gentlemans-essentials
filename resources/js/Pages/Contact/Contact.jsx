import { Head } from '@inertiajs/react'
import MasulineWash from '@/Components/MasulineWash';
import React from 'react'

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
      <div className=''> 
        {/* Home Content Here */} 
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-6 lg:gap-8 mb-4 pt-10 pb-10">
          <MasulineWash animated={false}  />
          <div className="p-3 col-lg-6 d-flex flex-column text-center text-lg-start" data-aos="fade-up" data-aos-duration="1500">
            <h1 className='secondary-font'>Contact</h1>
            <p className='secondary-font'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, facilis rem quas odio minima commodi incidunt! Hic veritatis ipsam aspernatur vitae natus. Accusamus aut magnam earum soluta saepe explicabo voluptatibus!</p>
            <p className='secondary-font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quisquam incidunt iure ab quia! Facere modi laborum ut distinctio nulla.</p>
            <div className='mb-3'>
              <div className="d-flex align-items-center p-2">
                <i className="bi bi-geo-alt contactIcon d-flex align-items-center fs-5 p-3"></i>
                <div className="ms-3">
                  <p className="mb-0 fs-6">123 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
              </div>
              <div className="d-flex align-items-center p-2">
                <i className="bi bi-envelope contactIcon d-flex align-items-center fs-5 p-3"></i>
                <div className="ms-3">
                  <p className="mb-0 fs-6">name@example.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center p-2">
                <i className="bi bi-telephone contactIcon d-flex align-items-center fs-5 p-3"></i>
                <div className="ms-3">
                  <p className="mb-0 fs-6">+1 234 5678 91011</p>
                </div>
              </div>
            </div>

            <form className='needs-validation' novalidate onSubmit={handleSubmit}>
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
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
