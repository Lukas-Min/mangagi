import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (


    <footer className="border-t-2 border-t-blush bg-licorice mt-10 z-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <div className="flex items-center mb-0 space-x-3 rtl:space-x-reverse">
              <img className='h-auto w-20 sm:w-24 md:w-28' src="/img/logo/mangagi.png" alt="Mangagi Logo" />
            </div>
          </Link>
          <ul className="flex flex-wrap items-center font-medium mb-0 ">
            <li>
              <Link to={'/'} className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to={'/about'} className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to={'/contact'} className="hover:underline me-4 md:me-6">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-blush mx-auto lg:my-8" />
        <span className="block text-center ">© 2024 <Link to={'/mangagi'}><span className='font-bold'>Mangagi™</span></Link> by Mangagu | All Rights Reserved.</span>
      </div>
    </footer>


  );
}

export default Footer;
